const express = require('express')
const router = express.Router();

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

module.exports = router

