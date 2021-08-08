const fs = require("fs");
const axios = require("axios");
const moment = require("moment");


async function dowork(){
    try {
      let readstockNo = await new Promise((resolve,reject)=>{
            fs.readFile("stock.txt","utf-8",(error,stoke)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(stoke)
                }
            })
        })
       
            let result= await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY",{
                params:{
                    response:"json",
                    date:moment().format("YYYYMMDD"),
                    stockNo:readstockNo,
                },
            })
            console.log(result.data);
        }
       catch{
           console.log(error);
       }                   
}
dowork()