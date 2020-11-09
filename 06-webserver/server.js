const express = require('express')
const app = express()

app.get('/', function(req, res) {
    // res.send('Hello World')
    let salida = {
        nombre: 'yao',
        edad: 28,
        url: req.url
    }

    res.send(salida);
})

app.listen(3000)