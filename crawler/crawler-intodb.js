const axios = require("axios");
const moment = require("moment");
const fs = require("fs");
const mysql = require("mysql");
require("dotenv").config();


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


connection.connect((err) => {
  if (err) {
    console.error("資料庫連不上");
  }
});

function readStockPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("stock.txt", "utf8", (err, stockCode) => {
      if (err) {
        reject(err);
      } else {
        resolve(stockCode.trim());
      }
    });
  });
}



function queryStockPricePromise(stockCode) {
  return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
    params: {
      response: "json",
      date: moment().format("YYYYMMDD"),
      stockNo: stockCode,
    },
  });
}

function queryStockCodePromise(stockCode) {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM stock WHERE stock_id = ?",
      [stockCode],
      function (error, results, fields) {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
}






function insertDataPromise(parsedData) {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT IGNORE INTO stock_price (stock_id, date, volume, amount, open_price, high_price, low_price, close_price, delta_price, transactions) VALUES ?",
      [parsedData],
      function (error, results, fields) {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
}

async function doWork() {
  try {   
    let stockCode = await readStockPromise();

    let dbResults = await queryStockCodePromise(stockCode);

    if (dbResults.length === 0) {
      throw "此股票代碼不在資料庫範圍內";
    }
    console.info("資料庫有查到資料");

    let response = await queryStockPricePromise(stockCode);

    const twseData = response.data;
    if (twseData.stat !== "OK") {
      throw "從證交所查到的資料有問題!";
    }

    let parsedData = twseData.data.map((item) => {
      item = item.map((value) => {
        return value.replace(/,/g, "");
      });
      item[0] = parseInt(item[0].replace(/\//g, ""), 10) + 19110000;

      item.unshift(stockCode);
      return item;
    });
    console.log(parsedData);

    let insertResult = await insertDataPromise(parsedData);
    console.log(insertResult);
  } catch (e) {
    console.error("@@@@@@@@@@@");
    console.error(e);
  } finally {
    connection.end();
  }
}

doWork();