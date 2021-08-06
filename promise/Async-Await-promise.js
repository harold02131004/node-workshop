//這是一個  callback hell 程式


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


async function Morning(){
  let job1 = await doWork("刷牙", 3000, true);
  console.log(job1);
  let job2 = await doWork("吃早餐", 5000, true);
  console.log(job2);
  let job3 = await doWork("刷牙", 2000, true);
  console.log(job3);
}

Morning();










// let job1 = doWork("刷牙", 1000, true);
// console.log(job1);
// job1
// .then((resolve)=>{

//   console.log( "刷牙成功了",resolve);
//   return doWork("吃早餐",5000,true);
// })
// .then((resolve)=>{

//   console.log( "吃早餐成功了",resolve);
//   return doWork("寫功課",5000,true);
// })
// .then((resolve)=>{

//   console.log( "寫功課成功了",resolve);
 
// })
// .catch((error) =>{
//   console.log( "失敗",error);
// })
// .finally(() => {
//   console.log("最後結果");
// });


//async function Morning(){}




