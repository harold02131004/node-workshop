

const fs = require("fs");
const axios = require("axios");
const moment = require("moment");


new Promise((resolve,reject)=>{
    fs.readFile("stock.txt","utf-8",(error,stoke)=>{
        if(error){
            reject(error)
        }else{
            resolve(stoke)
        }
    })
})
.then((stoke)=>{
    return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY",{
        params:{
            response:"json",
            date:moment().format("YYYYMMDD"),
            stockNo:stoke,
        },
    })
})
.then(result=>{
    console.log(result.data);
})
.catch((err)=>{
    console.log(err);
})
