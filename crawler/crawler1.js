

const axios = require("axios");
const moment = require("moment");

console.log(moment().format('YYYYMMDD'));

axios
.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210807&stockNo=2330", {
    params:{
        response : "json",
        date: moment().format("YYYYMMDD"),
        stockNo:"2330",
    },
})
.then(result =>{
    console.log(result.data)
})
.catch(error =>{
    console.log(error);
})
