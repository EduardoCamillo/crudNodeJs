const express = require('express');
var app = express();
const port = 3000;
const sql = require('./database.js')
const bodyParser = require('body-parser')



app.set('view-engine', 'ejs')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send({
        teste: "Olá",
        idade: 22
    });
})
app.get('/login', (req,res)=>{
    res.render('index.ejs')

});
app.post('/login/home', (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:5173');
    var email = req.body.email;
    var senha = req.body.password;
    try{
        sql.query('INSERT INTO users(email,password) VALUES(' + '"' + email + '"' + ',' + '"' + senha +'"' + ' );')
        res.send("Seu email é:" + email + "E sua senha é: " + senha);
    }catch(error){
        res.send("O erro:" + error)
    }
});
    app.get('/consulta', function(req,res){
        try{
            sql.query('SELECT * FROM users', function(err,result){
                if(err) throw "Olha onde está o erro" + err;
                    res.json(result)
        });
        }catch(e){
            console.log("Error aqui:" + e)
        }
})
app.get('/users', function(req,res){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:5173');
    var user = {
        nome: "eduardo",
        sobrenome: "Camillo",
        age: 22     
    }
    res.json({
        nome: "eduardo",
        sobrenome: "camillo",
        age: 22
    });
    res.statusCode = 200
    res.statusMessage = "Deu certo"
    
})
app.delete('/users', function(req,res){
    res.send('Deletando...')
})
app.listen(port, function(){
    console.log("Servidor iniciando...")
    console.log("Server on")
})
