const express = require("express");

let app = express();


app.use((req, res, next)=>{
    let current = new Date();
   console.log(`123來訪問瞜 at ${current.toISOString()}`);
    next();
  });



  app.use((req, res, next)=>{
    
    console.log(123);
     next();
   });


//http Method :get post put

app.get("/",function (request , response, next){
    response.send("Hello");
});


app.get("/about",function (request , response, next){
    response.send("about us");
});


app.listen(3000, function () {
    console.log("我們的 web server 啟動了～");
  });



