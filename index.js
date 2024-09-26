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
    var email = req.body.email;
    var senha = req.body.password;
    try{
        sql.query('INSERT INTO users(email,password) VALUES(' + '"' + email + '"' + ',' + '"' + senha +'"' + ' );')
        res.send("Seu email é:" + email + "E sua senha é: " + senha);
    }catch(error){
        res.send("O erro:" + error)
    }
    


});
app.get('/users', function(req,res){
    var user = {
        nome: "eduardo",
        sobrenome: "Camillo",
        age: 22
    }
    res.send(user);
})
app.delete('/users', function(req,res){
    res.send('Deletando...')
})
app.listen(port, function(){
    console.log("Servidor iniciando...")
    console.log("Server on")
})
