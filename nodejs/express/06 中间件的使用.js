const express = require("express");

const app = express();

app.use((req, res, next)=>{
    //获取到达服务器的时间
    const time = Date.now();
    req.starTime = time;
    next()
})

app.get("/", (req, res)=>{

    res.send("Home page" + req.starTime);
})
app.get("/user", (req, res)=>{

    res.send("User page" + req.starTime);
})
app.listen(8081, ()=>{
    console.log("8081端口启动")
})