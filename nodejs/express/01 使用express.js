//导入 express
const  express = require('express');
/*创建web服务器*/
const app = express();
//发起get请求
app.get('/user',(req, res)=>{
    //调用express 提供的res.send()方法,向服务器响应一个JSON对象
    res.send({name:'zs', age:20, gender:'男'})
})
app.post("/user",(req, res)=>{
    res.send("请求成功！");
})
app.get('/?name=hkq&age=30', (req, res)=>{
    //
    console.log(req.query)
    res.send(req.query)
})

//监听端口
app.listen(80, ()=>{
    console.log("80端口已经启动")
})

