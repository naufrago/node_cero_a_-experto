const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'application/json' });
    let salida = {
            nombre: 'yao',
            edad: 28,
            url: req.url
        }
        // res.write('hola mundo');
    res.write(`hola mundo \n ${JSON.stringify(salida)}`);
    res.end();
}).listen(8080);

console.log('escuchando en el puerto 8080');