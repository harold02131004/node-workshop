function syncF() {
    console.log(1);
  
    setTimeout(() => {
      console.log(2);
    }, 0);
    console.log(3);
  }
  
  console.log(4);
  syncF();
  console.log(5);

"第一行 function syncF 是同步再來跑到裡面是非同步  會先丟給暗樁去做(會跑到queue 再由Event Loop 丟回Stack)  所以會先跑到第10行的4，再來開始作暗樁裡面的  先跑1  再來跑底下的setTimeout，由於setTimeout是非同步的也丟給暗樁做(會跑到queue 再由Event Loop 丟回Stack)   所以先跑3，再來因為呼叫syncF()先從queue(RIRO)拉到syncF()呼叫的東西  所以先映出5  再來就是2"


