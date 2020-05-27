//Carregando Modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const app = express()
const path = require("path")
const adm = require("./routes/adm/adm")
const admCliente = require("./routes/adm/usuario/cliente")
const admFuncionario = require("./routes/adm/usuario/funcionario")
const user = require("./routes/user/user")


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

    app.use(adm);

    app.use(admCliente);

    app.use(admFuncionario);

    app.use(user);


const PORT = 8082
app.listen(PORT,()=>{
    console.log("Servidor rodando!, Go Eat")
    console.log(PORT)
}) 