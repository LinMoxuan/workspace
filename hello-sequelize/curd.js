function select_net(sql,connection,callback){
    connection.query(sql, function (err, result) {
      if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
      console.log('--------------------------SELECT----------------------------');
      callback(result);
      console.log(result);
      console.log('------------------------------------------------------------\n\n'); 
    });
}
function insert_net(addSql,addSqlParams,connection){
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
function update_net(modSql,modSqlParams,connection){
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
function delete_net(delSql,connection){
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

module.exports = {
    select_net: select_net,
    insert_net: insert_net,
    update_net: update_net,
    delete_net: delete_net
};