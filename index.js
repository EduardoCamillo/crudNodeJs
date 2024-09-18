const express = require('express');
var app = express();
const mysql = require('mysql');
const port = 3000;
const sql = require('sql')


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
    var email = req.body.teste;

    sql.create({
        email: email
    })

});
app.get('/users', function(req,res){
    res.send({
        nome: "eduardo",
        sobrenome: "Camillo",
        idade: 22
    });
})
app.delete('/users', function(req,res){
    res.send('Deletando...')
})
app.listen(port, function(){
    console.log("Servidor iniciando...")
    console.log("Server on")
})
