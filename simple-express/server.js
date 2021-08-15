const express = require("express");

let app = express();

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


