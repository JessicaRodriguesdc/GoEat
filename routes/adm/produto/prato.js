const express = require('express')
const router = express.Router();

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