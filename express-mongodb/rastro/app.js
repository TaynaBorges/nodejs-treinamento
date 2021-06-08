const express = require('express');
const consign = require('consign');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

consign().include('models').then('controllers').then('routes').into(app);

app.listen(3000, ()=>console.log('Servidor rodando na porta 3000...'));

app.get(
    '/',
    (request, response) => {
        console.log('Rota principal chamada...');
        response.send('Servidos rodando, está tudo OK');
    }
);
