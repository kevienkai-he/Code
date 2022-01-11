//1、导入mysql

const mysql = require("mysql");

// 2、建立与数据库的连接关系

const db = mysql.createPool({
    host:'127.0.0.1',  //数据库的ip地址
    user:"root",   //登录数据库的账号
    password:"admin123",  //登录数据库的密码
    database:"my_db_01"  //指定要操作哪个数据库
})

// 测试数据库能否正常工作
/*
db.query("select 1", (err, results)=>{
    if(err) return console.log(err.message)

    console.log(results);
})*/

//查询表中的数据
/*
const sqlStr = "select * from user";

db.query(sqlStr, (err, results)=>{
    if(err){
        return   console.log(err.message)
    }else {
        console.log(results)
    }
})*/

//插入数据
/*const user = { username:"liming", password:"asd123" };
const sqlStr = "insert into user(username, password) values (?, ?)";

db.query(sqlStr,[user.username, user.password], (err, results)=>{
    if(err) return console.log(err.message);
    //affectedRows影响的行数===1
    if(results.affectedRows === 1) {
        console.log("插入数据成功");
    }
})*/

//插入数据 的简便方法
/*const user = { username:"lt", password:"hjk123"};

const sqlStr = "insert into user set ?";

db.query(sqlStr, user, (err, results)=>{
    if(err) return  console.log(err.message);
    if(results.affectedRows === 1){
        console.log("数据插入成功！");
    }
})*/

//更新数据
/*
const user = { id:4, username:"Kcp", password:"327926"}

const sqlStr = "update user set ? where id = ?";

db.query(sqlStr, [user, user.id], (err, resluts)=>{
    if(err) return  console.log(err.message)
    if(resluts.affectedRows === 1){
        console.log('更新数据成功')
    }
})
*/
