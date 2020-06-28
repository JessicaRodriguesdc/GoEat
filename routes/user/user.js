const express = require('express')
const routerUser = express.Router();    
    
    //user
    routerUser.get('/logar', function (req, res) {
        res.render('user/login');
    });

    routerUser.get('/cadastrar', function (req, res) {
        res.render('user/registrar');
    });

    //pratos
    routerUser.get('/pratos', function (req, res){
        res.render('prato/pratos');
    });

    routerUser.get('/pratos/realizar-pedido', function (req, res){
        res.render('prato/realizarPedido');
    });

    //pedidos
    routerUser.get('/pedidos', function (req, res){
        res.render('pedido/pedidos');
    });

    module.exports = routerUser