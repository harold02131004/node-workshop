async function asyncF() {
    console.log(1);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 0);
    });
    console.log(3);
  }
  
  console.log(4);
  asyncF();
  console.log(5);



  "第一行 function syncF 是同步再來跑到裡面是非同步  會先丟給暗樁去做(會跑到queue 再由Event Loop 丟回Stack)  所以會先跑到第10行的4，再來開始作暗樁裡面的  先跑1  再來跑底下的Promise， 由於增加了await所以會先讓他等等跑，外面有先呼叫asyncF()先映出了5，再來回到裡面的Promise  因為await會先處理resolve 跟reject  先映出2  最後映出3"

