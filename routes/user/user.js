    //user
    app.get('/logar', function (req, res) {
        res.render('user/asseco/login');
    });

    app.get('/cadastrar', function (req, res) {
        res.render('user/asseco/registrar');
    });


    
    //pratos
    app.get('/pratos', function (req, res){
        res.render('prato/pratos');
    });

    //pedidos
    app.get('/pedidos', function (req, res){
        res.render('pedido/pedidos');
    });