//這是一個  callback hell 程式

// let doWork = function (job, timer, isOK) {
//     模擬一個非同步工作
//     setTimeout(() => {
//       let dt = new Date();
//       callback 慣用的設計
//       第一個參數: error
//       第二個參數: 要回覆的資料
//       cb(null, `完成工作: ${job} at ${dt.toISOString()}`);
//     }, timer);
//   };

  let doWork = function (job, timer, isOK) {
   
    return new Promise((resolve, reject) => {
      
      console.log("in promise");
      setTimeout(() => {
        let dt = new Date();
        if (isOK) {        
          resolve(`完成工作: ${job} at ${dt.toISOString()}`);
        } else {         
          reject(`失敗了 ${job}`);
        }
      }, timer);
    });
  };


  
  let dt = new Date();
  console.log(`開始工作 at ${dt.toISOString()}`);
//   // 刷牙 -> 吃早餐 -> 寫功課
  
//   // 解決: 接續做的工作
//   // ---> 動作如果要接續著做，只能把下一個動作放在上一個動作的 callback
//   //   --> callback hell
  
//   doWork("刷牙", 3000, function (err, data) {
//     // 刷完牙後會被回呼的函式
//     // 會在這裡就是已經刷完牙了
//     if (err) {
//       console.error("發生錯誤了:", err);
//     } else {
//       console.log(data);
//       doWork("吃早餐", 5000, function (err, data) {
//         // 在這裡，就是已經吃完早餐了！
//         if (err) {
//           console.error("發生錯誤了:", err);
//         } else {
//           console.log(data);
//           doWork("寫功課", 3000, function (err, data) {
//             if (err) {
//               console.error("發生錯誤了:", err);
//             } else {
//               console.log(data);
//             }
//           });
//         }
//       });
//     }
//   });
  

  let job1 = doWork("刷牙", 1000, true);
console.log(job1);
job1
.then((resolve)=>{

    console.log( "刷牙成功了",resolve);
    return doWork("吃早餐",5000,true);
 })
 .then((resolve)=>{

    console.log( "吃早餐成功了",resolve);
    return doWork("寫功課",5000,true);
 })
 .then((resolve)=>{

    console.log( "寫功課成功了",resolve);
   
 })
 .catch((error) =>{
    console.log( "失敗",error);
 })
.finally(() => {
    console.log("最後結果");
});




//  let job2 = doWork("吃早餐", 3000, true);
// console.log(job2);
// job2.then(
//   function (resolve) {
//     console.log("第 3 個函式被呼叫了", resolve);
//   },
//   function (reject) {
//     console.log("第 4 個函式被呼叫了", reject);
//   }
// );

// let job3 = doWork("寫功課", 3000, true);
// console.log(job3);
// job3.then(
//   function (resolve) {
//     console.log("第 5 個函式被呼叫了", resolve);
//   },
//   function (reject) {
//     console.log("第 6 個函式被呼叫了", reject);
//   }
// );
