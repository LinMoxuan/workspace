var express = require('express');  //引入express模块
var mysql = require('mysql');     //引入mysql模块
var curd = require(`./curd`);
var app = express();  //创建express的实例

var connection = mysql.createConnection({////创建mysql实例
    host     : 'localhost',
    port:'3306',
    user     : 'root',
    password : 'root',
    database : 'demo_rest'
});
connection.connect();

var  sql = 'SELECT * FROM net_analyze';
var str = "";
curd.select_net(sql,connection,str=>{
    console.log('****************');
    console.log(JSON.stringify(str));
    app.get('/', function(req, res){
        res.send(str); //服务器响应请求
    });
});

connection.end();
app.listen(3000,function(){   //监听3000端口
    console.log("Server running at 3000 port");
});
