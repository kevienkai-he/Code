const express = require("express");

const app = express();

//定义最简单的中间件
const mw = function (req, res, next){
    console.log("最简单的中间件");
    // 把流转关系，转交给下一个中间件
    next()
}
//全局生效的中间件
app.use(mw);

app.get("/", (req, res)=>{
    console.log("调用了/路由");
    res.send("Home page");
})
app.get("/user", (req, res)=>{
    console.log("调用了/user路由");
    res.send("User page");
})
app.listen(8081, ()=>{
    console.log("8081端口启动")
})