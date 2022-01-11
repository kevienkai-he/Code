const express = require("express");

const app = express();
const qs = require("querystring");

app.use((req, res, next)=>{
    /*定义具体的中间件业务逻辑*/
    let str = "";

    req.on("data", (chunk)=>{
        str += chunk;
    })

    req.on("end", ()=>{
        req.body = qs.parse(str);
        next();
    })

})
// app.use(express.urlencoded({extended:false}))
app.post("/user", (req, res)=>{
    //没有解析的中间件
    // console.log(req.body)
    res.send(req.body);
})

app.listen(80, ()=>{
    console.log("80端口已经启动.....");
})