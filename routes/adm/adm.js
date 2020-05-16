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
        res.render('adm/estoque/estoques')
    })
    app.get('/painel-adm/estoques-novo',function(req,res){
        res.render('adm/estoque/estoqueNovo')
    })
    app.get('/painel-adm/estoques-editar',function(req,res){
        res.render('adm/estoque/estoqueEditar')
    })
    app.get('/painel-adm/estoques-excluir',function(req,res){
        res.render('adm/estoque/estoqueExcluir')
    })

    //pedidos
    app.get('/painel-adm/pedidos',function(req,res){
        res.render('adm/pedido/pedidos')
    })
    app.get('/painel-adm/pedidos-novo',function(req,res){
        res.render('adm/pedido/pedidosNovo')
    })
    app.get('/painel-adm/pedidos-editar',function(req,res){
        res.render('adm/pedido/pedidosEditar')
    })
    app.get('/painel-adm/pedidos-excluir',function(req,res){
        res.render('adm/pedido/pedidosExcluir')
    })

    //pratos
    app.get('/painel-adm/pratos',function(req,res){
        res.render('adm/prato/pratos')
    })
    app.get('/painel-adm/pratos-novo',function(req,res){
        res.render('adm/prato/pratosNovo')
    })
    app.get('/painel-adm/pratos-editar',function(req,res){
        res.render('adm/prato/pratosEditar')
    })
    app.get('/painel-adm/pratos-excluir',function(req,res){
        res.render('adm/prato/pratosExcluir')
    })