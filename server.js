const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


// iniciando o app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//iniciando o db

mongoose.connect('mongodb+srv://jaquedesafio:Manu.1905@cluster0-disiq.mongodb.net/desafiodb?retryWrites=true&w=majority',
{ useNewUrlParser: true , useUnifiedTopology: true });

requireDir('./src/models/');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
console.log("rodando na porta 3001")