const express = require('express');

const app = express();

app.listen(300, ()=>console.log('Servidor rodando na porta 3000...'))

app.get(
    '/',
    (request, response) => {
        console.log('Rota principal chamada...');
        response.send('Servidos rodando, está tudo OK');
    }
);