import http from 'http';


const hostname = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
    // rota para a pagina homme
    if (request.method === "GET" && request.url === '/') {
        response.statusCode = 200; 
        response.setHeader('Content-type', 'text/html');
        response.end('<h2>Home</h2>');

        // rota para pagina sobre
    } else if(request.method === 'GET' && request.url === '/sobre') {
        response.statusCode = 200; 
        response.setHeader('Content-type', 'text/httml');
        response.end('<h2>Home</h2>');

      // rota para pagina sobre
    }  else if(request.method === 'GET' && request.url === '/Cadastro-usuarios') {
        response.statusCode = 200; 
        response.setHeader('Content-type', 'text/html');
        response.end('<h2>Cadastro de usuarios</h2>');

    }  else {
        response.statusCode = 404; 
        response.setHeader('Content-type', 'text/html');
        response.end('<h2>404 - Pagina não encontrada </h2>');
    }

});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
    
});