const mysql = require('mysql2');

var sql = mysql.createConnection({
    host: 'localhost',
    user: 'sysadmin',
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
var email = "teste1"
var senha = "senha"


try{
    console.log("Realizando inserção:")
    sql.query('INSERT INTO users(email, password) VALUES( ' + '"' + email  + '"' + ', ' + '"' + senha  + '"' + ');')
}catch(error){
    console.log("DEU ERRO: " + error)
}
