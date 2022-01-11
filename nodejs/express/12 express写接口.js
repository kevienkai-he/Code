const express = require("express");

const app = express();

app.get("/api/jsonp", (req, res)=>{
    /*得到函数的名称*/
    const funcName =  req.query.callback;

    const data = { name:'zs', age:22 };

    const scriptStr = `${funcName}(${JSON.stringify(data)})`;

    res.send(scriptStr);

})

//一定要路由之前配置cors，从而解决跨域问题
const cors = require("cors");

app.use(cors());
//导入模块
const apiRouter = require("./13 apiRounter");



//处理数据的中间件必须放在请求之前
app.use(express.urlencoded({extended:false}))
//把路由模块，注册到app上
app.use("/api", apiRouter);



app.listen(80, ()=>{
    console.log("80端口已经启动......");
})