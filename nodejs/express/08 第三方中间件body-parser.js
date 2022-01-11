const express = require("express");

const app = express();

//1、导入解析表单的数据的中间件
const  parser = require('body-parser');

app.use(parser.urlencoded({extended:false}));

app.post("/user", (req, res)=>{
    //没有解析的中间件
    console.log(req.body);
    res.send("ok");
})

app.listen(80, ()=>{
    console.log("80端口已经启动.....");
})