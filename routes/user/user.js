const express = require('express')
const router = express.Router();    
    
    //user
    router.get('/logar', function (req, res) {
        res.render('user/asseco/login');
    });

    router.get('/cadastrar', function (req, res) {
        res.render('user/asseco/registrar');
    });

    //pratos
    router.get('/pratos', function (req, res){
        res.render('prato/pratos');
    });

    router.get('/pratos/realizar-pedido', function (req, res){
        res.render('prato/realizarPedido');
    });

    //pedidos
    router.get('/pedidos', function (req, res){
        res.render('pedido/pedidos');
    });

    module.exports = router