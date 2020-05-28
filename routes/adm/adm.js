const express = require('express')
const router = express.Router();

// ADM
// painel do adm 
router.get('/painel-adm',function(req,res){
    res.render('adm/index')
})

    // usuarios
    //cliente
    router.get('/painel-adm/clientes',function(req,res){
        res.render('adm/users/clientes/clientes')
    })

    //funcionario
    router.get('/painel-adm/funcionarios',function(req,res){
        res.render('adm/users/funcionarios/funcionarios')
    })

     //estoques
    router.get('/painel-adm/estoques',function(req,res){
        res.render('adm/estoque/estoques')
    })

    //pedidos
    router.get('/painel-adm/pedidos',function(req,res){
        res.render('adm/pedido/pedidos')
    })

    //pratos
    router.get('/painel-adm/pratos',function(req,res){
        res.render('adm/prato/pratos')
    })


    module.exports = router