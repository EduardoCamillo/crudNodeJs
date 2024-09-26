const mysql = require('mysql2');

var sql = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'q1w2e3r4',
    database: 'cloud'
}
);



try{
    sql.connect();
    console.log("Conexão realizada");
}catch(e){
    console.log("Erro: " + e)
}
module.exports = sql;