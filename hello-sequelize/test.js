var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'demo_rest'
});
 
connection.connect();
 
function select_net(sql){
  connection.query(sql, function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');  
});
}
function insert_net(addSql,addSqlParams){
  connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
     console.log('[INSERT ERROR] - ',err.message);
     return;
    }        

   console.log('--------------------------INSERT----------------------------');
   //console.log('INSERT ID:',result.insertId);        
   console.log('INSERT ID:',result);        
   console.log('-----------------------------------------------------------------\n\n');  
  });
}
function update_net(modSql,modSqlParams){
  connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
          console.log('[UPDATE ERROR] - ',err.message);
          return;
    }        
   console.log('--------------------------UPDATE----------------------------');
   console.log('UPDATE affectedRows',result.affectedRows);
   console.log('-----------------------------------------------------------------\n\n');
  });
}
function delete_net(delSql){
  connection.query(delSql,function (err, result) {
    if(err){
      console.log('[DELETE ERROR] - ',err.message);
      return;
    }        

   console.log('--------------------------DELETE----------------------------');
   console.log('DELETE affectedRows',result.affectedRows);
   console.log('-----------------------------------------------------------------\n\n');  
  });
}

// var  sql = 'SELECT * FROM net_analyze';
// select_net(sql);

// var  addSql = `INSERT INTO net_analyze(factory,name,model,serial,check_cycle,check_unit,check_result,check_date,check_num)`
//               +`VALUES('中电科仪器仪表有限公司', '矢量网络分析仪', 'AV3672B', '1001056', 1, '中计计量检测有限公司', '合格', '2019/6/8', '150269879')`;
// var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
// insert_net(addSql,addSqlParams);

// var modSql = 'UPDATE net_analyze SET name = ? WHERE serial = ?';
// var modSqlParams = ['矢量网络分析仪1','1001051'];
// update_net(modSql,modSqlParams);

var delSql = `DELETE FROM net_analyze where serial='1001056'`;
delete_net(delSql);

connection.end();