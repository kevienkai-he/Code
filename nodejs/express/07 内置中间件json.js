const express = require("express");

const app = express();

//通过express.json()的中间件，解析表单中JSON数据
app.use(express.json());

//配置对象
app.use(express.urlencoded({extended:false}));

app.post("/", (req, res)=>{
    ////req.body获取JSON格式的表单数据和url-encoded格式的数据
    console.log(req.body);
    //如果没有配置表单数据的中间件，req.body=undefined
    res.send("OK");
})

app.get("/book", (req, res)=>{
    //req.body获取JSON格式的表单数据和url-encoded格式的数据
    console.log(req.body);
    res.send("Book Page");
})
app.listen(80, ()=>{
    console.log("80端口已经启动.....");
})