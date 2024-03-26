// Chamando(requerendo) o framework express instalado com npm
const express = require('express');
// Requerendo Consignconst consig = require('consign');
const consig = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');

const app = express();
/*Declaração da utilização do EJS. 
A tecnologia de renderização, máquina será o EJS*/
app.set('view engine', 'ejs');
app.set('views', './app/views'); // setar novo caminho da pasta de views html, ejs

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use(expressValidator()); 

// Configurar o express-session midlleware
app.use(session({
    secret: 'keyboard cat', // palavra-secreta garante que a sessão seja única
    resave: false
    // saveUninitialized: false
}));


// Chamando função 
consig()
    .include('app/routes') // incluindo rotas e as carregando automaticamente
    .then('config/dbConnection.js') // incluindo arquivo(específico) dbConnection.js
    .then('app/models') // consign trabalha com promise
    .then('app/controllers') // mapeando pasta de controllers
    .into(app); // adicionando todos os includes em app

module.exports = app; // exportando