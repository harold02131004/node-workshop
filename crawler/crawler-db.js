// const axios = require("axios");
// const moment = require("moment");
// const fs = require("fs");


const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.host,
    user:  process.env.user,
    port:  process.env.port,
    password: process.env.password,
    database:  process.env.database,
  });


  connection.connect((err) => {
    if (err) {
      console.error("資料庫連不上");
    }
  });

  // 不關閉連線，認為程式一直在執行
  connection.end();

//   const fs = require("fs");
//   const axios = require("axios");
//   const moment = require("moment");
  
  
//   async function dowork(){
//       try {
//         let readstockNo = await new Promise((resolve,reject)=>{
//               fs.readFile("stock.txt","utf-8",(error,stoke)=>{
//                   if(error){
//                       reject(error)
//                   }else{
//                       resolve(stoke)
//                   }
//               })
//           })
         
//               let result= await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY",{
//                   params:{
//                       response:"json",
//                       date:moment().format("YYYYMMDD"),
//                       stockNo:readstockNo,
//                   },
//               })
//               console.log(result.data);
//           }
//          catch{
//              console.log(error);
//          }                   
//   }
//   dowork()
