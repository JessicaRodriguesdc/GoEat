const express = require('express')
const router = express.Router();

router.get('/painel-adm/cliente-novo',function(req,res){
    res.render('adm/users/clientes/clienteNovo')
})
router.get('/painel-adm/cliente-editar',function(req,res){
    res.render('adm/users/clientes/clienteEditar')
})
router.get('/painel-adm/cliente-excluir',function(req,res){
    res.render('adm/users/clientes/clienteExcluir')
})

module.exports = router