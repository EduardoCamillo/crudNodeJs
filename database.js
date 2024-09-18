const mysql = require('mysql2');

var sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'q1w2e3r4',
    database: 'teste'
}
);



sql.connect(function(error){
    if(error){
        console.log("Deu péssimo de novo: " + error);
        return;
    }
    console.log("Deu bom")
});
