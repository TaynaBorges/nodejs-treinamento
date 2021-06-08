module.exports = (app) => {

    app.get(
        '/', // é a URL da rota
        (request, response) => {
            console.log('Rota principal chamada...');
            response.send('Servidos rodando, está tudo OK');
        }
    );

    // criando rota para cadastrar rastreador
    //POST
    //rota '/rastreador
    app.post(
        '/rastreador',
        app.controllers.rastreador.cadastrar
    );

    app.put(
        '/rastreador',
        app.contrellers.rastreador.alterar
    );

    app.delet(
        '/rastreador/:codigoRastreador',
        app.controlles.rastreador.excluir
    )
}