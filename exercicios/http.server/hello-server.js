const http = require('http');

function teste (request, response){
    response.write('<head><meta charset="UFT-8"></head>');
    response.write('<h1> Olá, enfermeira!</h1>');
    response.end()
}

const server = http.creatServer(teste);

server.listen(3000, () => console.log('Servidor rodando'));
