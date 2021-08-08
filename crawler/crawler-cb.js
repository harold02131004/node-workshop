
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");

//console.log(moment().format('YYYYMMDD'));
fs.readFile("stock.txt","utf8",(error,stock)=>{
    axios
    .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
        params:{
            response : "json",
            date: moment().format("YYYYMMDD"),
            stockNo:stock,
        },
    })
    .then(result =>{
        console.log(result.data.stockNo);
    });


});

// .catch(error =>{
//     console.log(error);
// })
