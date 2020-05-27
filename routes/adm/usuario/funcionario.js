const express = require('express')
const router = express.Router();

router.get('/painel-adm/funcionario-novo',function(req,res){
    res.render('adm/users/funcionarios/funcionarioNovo')
})
router.get('/painel-adm/funcionario-editar',function(req,res){
    res.render('adm/users/funcionarios/funcionarioEditar')
})
router.get('/painel-adm/funcionario-excluir',function(req,res){
    res.render('adm/users/funcionarios/funcionarioExcluir')
})

module.exports = router