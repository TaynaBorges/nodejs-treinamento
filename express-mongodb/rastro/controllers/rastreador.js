const mongoose = require('mongoose');
module.exports = (app) => {

    const RastreadorController = {

        cadastrar(request, response) {
            console.log('Rota /rastreador chamada...');
            console.log(`request.body: ${request.body}`); // sem o (app.use lá em cima) estava dando undefined
            console.log(request.body);

            const Rastreador = app.models.rastreador;
            const rastreador = new Rastreador(request.body);
            // console.log(`rastreador: ${rastreador}`);
            // console.log(rastreador);

        mongoose.connect(
            'mongodb://localhost:27017/rastro-dev',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            }
        ).then(
            (resultado) =>{
                console.log(`Conexão com MongoDB realizada.`);
                console.log(resultado);

                const resultadoCreate = Rastreador.create(rastreador)
                    .then((resultado) => {
                        console.log(`resultado do then: ${resultado}`);
                        console.log(resultado);
                        console.log(`Rastreador ${rastreador.codigoRastreador} cadastro com sucesso.`);
                        mongoose.disconnect();
                        response.status(200).send(resultado);
                    })
                    .catch((erro) => {
                        console.log(`Erro do catch: ${erro}`);
                        console.log(erro);
                        mongoose.disconnect();
                        response.status(500).send(`Erro ao cadastrar o Rastreador ${erro}`);
                    });
                // console.log(`Resultado do create: ${resultadoCreate}`);
            }
        ).catch(
            (erro) => {
                console.log(erro);
                console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
            });
        },
        alterar(request, response) {
            console.log('Rota PUT /rastreador chamada...');
            console.log(`request.body: ${request.body}`); // sem o (app.use lá em cima) estava dando undefined
            console.log(request.body);

            const Rastreador = app.models.rastreador;

            mongoose.connect(
                'mongodb://localhost:27017/rastro-dev',
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            ).then(() => {
                Rastreador.updateOne(
                    // objeto com o criterio de busca do documento, logo amaixo
                    {codigoRastreador: request.body.codigoRastreador},
                    {
                        //objeto com os dados que devem ser atualizados, logo abaixo
                        $set: {
                            placaVeiculo: request.body.placaVeiculo,
                            cpfCliente: request.body.cpfCliente
                        }
                    }
                )
                .then((resulatdo) => {
                    console.log(resulatdo);

                    if(resultado.nModified > 0){
                        mongoose.disconnect();
                        response.status(200).send('rastreador alterado com sucesso');
                    }else{
                        mongoose.disconnect();
                        response.status(404).send('rastreador não localizado no cadastro');
                    }
                })

                .catch(() => {
                    console.log(`Erro do catch: ${erro}`);
                        console.log(erro);
                        mongoose.disconnect();
                        response.status(500).send(`Erro ao cadastrar o Rastreador ${erro}`);
                })
            })
            .catch((erro) => {
                console.log(erro);
                console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
            });

            excluir(request, response) {
                console.log('Rota DELETE /rastreador chamada...');
                response.status(200).send('OK');

                mongoose.connect(
                    'mongodb://localhost:27017/rastro-dev',
                    {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true
                    }
                ).then(() => {
                    const Rastreamento = app.models.rastramento;
                    Rastreamento.deleteMany(
                        {codigoRastreador: request.params.codigoRastreador}
                    )
                    .then((resultadoDeleteMany) => {
                        console.log(`resultadoDeleteMany:`);
                        console.log(resultadoDeleteMany);

                        Rastreador.deleteOne(
                            {codigoRastreador: request.params.codigoRastreador}
                        )
                        .then((resultadoDeleteRastreador) => {
                            console.log(`resultadoDeleteRastreador`);
                            console.log(resultadoDeleteRastreador);
                            mongoose.disconnect();
                            if(resultadoDeleteRastreador.deleteCount ==1){
                                response.status(200).send(`Foi excluido ${resultadoDeleteRastreador.deleteCount} com sucesso`)
                            }else{
                                
                            }



                        })
                        .catch(() => {
                            console.log(`Erro ao excluir o Documentos do rastreador ${erro}`);
                            console.log(erro);
                            mongoose.disconnect();
                            response.status(500).send(`Erro ao excluir o Documentos do rastreador ${erro}`);
                        })

                        response.status(200).send('OK');
                    })
                    .catch((erro) => {
                        console.log(`Erro ao excluir os Documentos`);
                        mongoose.disconnect();
                        response.status(500).send('rastreador não localizado no cadastro');
                    })
                })
                .catch((erro) = {
                    console.log(erro);
                    console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                    response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
                });

            }
        }
    }
    return RastreadorController;
}
