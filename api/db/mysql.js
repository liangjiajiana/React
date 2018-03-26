var mysql= require('mysql');

var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port:3306,
  database : 'pharmacy',
  multipleStatements:true
});
 
module.exports = {
    select:function(tsql,callback){
        pool.query(tsql,function(error,rows){
          console.log(tsql)
            if(rows.length > 1){
                callback({rowsCount: rows[1][0]['rowsCount'],data:rows[0]});
            }else{
                callback(rows);
            }
        })
    }
}