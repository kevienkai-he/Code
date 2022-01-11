const qs = require("querystring");


const bodyParser = (req, res, next)=>{
    /*定义具体的中间件业务逻辑*/
    let str = "";

    req.on("data", (chunk)=>{
        str += chunk;
    })

    req.on("end", ()=>{
        req.body = qs.parse(str);
        next();
    })

}
module.exports = bodyParser;