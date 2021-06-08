const mongoose = require('mongoose');

module.exports = (app) => {

    const Schema = mongoose.Schema;

    const rastreadorSchema = Schema(
        {
            codigoRastreador: {type: String, required: true, index: { unique : true}},
            placaVeiculo: {type: String, required: true, index: { unique : true}},
            cpfCliente: {type: String, required: true},
        }
    );

    //model cria a colecao
    const Rastreador = mongoose.model('rastreadores' /*nomde da coleção */ , rastreadorSchema );
    return Rastreador;
};

