const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (request, response) => {
        
        response.writeHead(200, {'Content-Type': 'text/html'});

        let pag = '';

        if (request.url === '/') {
            pag = 'home.html';
        } else if (request.url === '/pag1') {
            pag = 'pag1.html';
        } else if (request.url === '/pag2') {
            pag = 'pag2.html';
        } else if (request.url === '/pag3') {
            pag = 'pag3.html';
        }
        else {
            pag = 'erro.html';
        }
        if (fs.existsSync(pag)) {
            fs.readFile(pag, 
                (erro, dados) => {
                    if (erro) {
                        throw erro;
                    } else {
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        response.write(dados);
                        response.end();

                    }
                }
            );    
        } else {
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.write(`pag ${pag} não localizada!`);
            response.end();
        }
    }
);

server.listen(3000, ()=> {console.log("Escutando a porta 3000")});


