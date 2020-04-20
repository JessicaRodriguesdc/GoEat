//Carregando Modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const app = express()
const path = require("path")

    // Body Parser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
   // Handlebars
    app.engine("handlebars", handlebars({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

    // Public
    app.use(express.static(path.join(__dirname, "public")));  

    //home
    app.get('/', function (req, res) {
        res.render('index');
    });

    //user
    app.get('/logar', function (req, res) {
        res.render('user/asseco/login');
    });

    app.get('/cadastrar', function (req, res) {
        res.render('user/asseco/registrar');
    });

    //pratos
    app.get('/pratos', function (req, res){
        res.render('user/prato/pratos');
    });

const PORT = 8082
app.listen(PORT,()=>{
    console.log("Servidor rodando!")
    console.log(PORT)
}) 