const express = require("express");

const app = express();

const customBodyParser = require("./11 custom-body-parser");
app.use(customBodyParser);


app.post("/user", (req, res)=>{
    //没有解析的中间件
    res.send(req.body);
})

app.listen(80, ()=>{
    console.log("80端口已经启动.....");
})