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

    //Rotas do projeto "por enquanto"
    //home
    app.get('/', function (req, res) {
        res.render('index');
    });

    //adm
    app.get('/painel-adm',function(req,res){
        res.render('adm/index')
    })

    //user
    app.get('/logar', function (req, res) {
        res.render('user/asseco/login');
    });

    app.get('/cadastrar', function (req, res) {
        res.render('user/asseco/registrar');
    });

    //pratos
    app.get('/pratos', function (req, res){
        res.render('prato/pratos');
    });

    //pedidos
    app.get('/pedidos', function (req, res){
        res.render('pedido/pedidos');
    });


    // ADM
    // estoque
    app.get('/painel-adm/estoque',function(req,res){
        res.render('adm/index')
    })

    // pedidos
    app.get('/painel-adm/pedidos',function(req,res){
        res.render('adm/index')
    })

    // pratos
    app.get('/painel-adm/pratos',function(req,res){
        res.render('adm/index')
    })

    // usuarios
    //cliente
    app.get('/painel-adm/clientes',function(req,res){
        res.render('adm/users/clientes/clientes')
    })
    app.get('/painel-adm/cliente-novo',function(req,res){
        res.render('adm/users/clientes/clienteNovo')
    })
    app.get('/painel-adm/cliente-editar',function(req,res){
        res.render('adm/users/clientes/clienteEditar')
    })
    app.get('/painel-adm/cliente-excluir',function(req,res){
        res.render('adm/users/clientes/clienteExcluir')
    })
    //funcionario
    app.get('/painel-adm/funcionarios',function(req,res){
        res.render('adm/users/funcionarios/funcionarios')
    })
    app.get('/painel-adm/funcionario-novo',function(req,res){
        res.render('adm/users/funcionarios/funcionarioNovo')
    })
    app.get('/painel-adm/funcionario-editar',function(req,res){
        res.render('adm/users/funcionarios/funcionarioEditar')
    })
    app.get('/painel-adm/funcionario-excluir',function(req,res){
        res.render('adm/users/funcionarios/funcionarioExcluir')
    })

     //estoques
    app.get('/painel-adm/estoques',function(req,res){
        res.render('adm/users/estoques/estoques')
    })
    app.get('/painel-adm/estoques-novo',function(req,res){
        res.render('adm/users/estoques/estoqueNovo')
    })
    app.get('/painel-adm/estoques-editar',function(req,res){
        res.render('adm/users/estoques/estoqueEditar')
    })
    app.get('/painel-adm/estoques-excluir',function(req,res){
        res.render('adm/users/estoques/estoqueExcluir')
    })


const PORT = 8082
app.listen(PORT,()=>{
    console.log("Servidor rodando!, Go Eat")
    console.log(PORT)
}) 