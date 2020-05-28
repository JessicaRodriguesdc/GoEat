const express = require('express')
const router = express.Router();

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

module.exports = router