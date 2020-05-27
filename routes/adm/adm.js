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
    // router.get('/painel-adm/cliente-novo',function(req,res){
    //     res.render('adm/users/clientes/clienteNovo')
    // })
    // router.get('/painel-adm/cliente-editar',function(req,res){
    //     res.render('adm/users/clientes/clienteEditar')
    // })
    // router.get('/painel-adm/cliente-excluir',function(req,res){
    //     res.render('adm/users/clientes/clienteExcluir')
    // })

    //funcionario
    router.get('/painel-adm/funcionarios',function(req,res){
        res.render('adm/users/funcionarios/funcionarios')
    })
    // router.get('/painel-adm/funcionario-novo',function(req,res){
    //     res.render('adm/users/funcionarios/funcionarioNovo')
    // })
    // router.get('/painel-adm/funcionario-editar',function(req,res){
    //     res.render('adm/users/funcionarios/funcionarioEditar')
    // })
    // router.get('/painel-adm/funcionario-excluir',function(req,res){
    //     res.render('adm/users/funcionarios/funcionarioExcluir')
    // })

     //estoques
    router.get('/painel-adm/estoques',function(req,res){
        res.render('adm/estoque/estoques')
    })
    router.get('/painel-adm/estoques-novo',function(req,res){
        res.render('adm/estoque/estoqueNovo')
    })
    router.get('/painel-adm/estoques-tipo',function(req,res){
        res.render('adm/estoque/estoqueTipo')
    })
    router.get('/painel-adm/estoques-editar',function(req,res){
        res.render('adm/estoque/estoqueEditar')
    })
    router.get('/painel-adm/estoques-excluir',function(req,res){
        res.render('adm/estoque/estoqueExcluir')
    })

    //pedidos
    router.get('/painel-adm/pedidos',function(req,res){
        res.render('adm/pedido/pedidos')
    })

    router.get('/painel-adm/pedidos-dia',function(req,res){
        res.render('adm/pedido/pedidosDia')
    })

    router.get('/painel-adm/pedidos-novo',function(req,res){
        res.render('adm/pedido/pedidosNovo')
    })
    router.get('/painel-adm/pedidos-editar',function(req,res){
        res.render('adm/pedido/pedidosEditar')
    })
    router.get('/painel-adm/pedidos-status',function(req,res){
        res.render('adm/pedido/pedidosStatus')
    })
    router.get('/painel-adm/pedidos-excluir',function(req,res){
        res.render('adm/pedido/pedidosExcluir')
    })

    //pratos
    router.get('/painel-adm/pratos',function(req,res){
        res.render('adm/prato/pratos')
    })
    router.get('/painel-adm/pratos-novo',function(req,res){
        res.render('adm/prato/pratosNovo')
    })
    router.get('/painel-adm/pratos-editar',function(req,res){
        res.render('adm/prato/pratosEditar')
    })
    router.get('/painel-adm/pratos-excluir',function(req,res){
        res.render('adm/prato/pratosExcluir')
    })


    module.exports = router