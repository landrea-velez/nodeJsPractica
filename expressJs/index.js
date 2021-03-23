const express = require('express');
const server = express();
const fs = require('fs');

const home = fs.readFileSync('./home.html');
const about = fs.readFileSync('./about.html');

server.get('/', getHomePage);

server.get('/about', (req, res) => {
    res.write(about)
});

server.listen(8080, () => {
console.log("Server is running on port " + 8080)
});


function getHomePage(req, res){
    return res.write(home)
}
//HTTPS methods
// GET lectura
// POST nuevo recurso
// PT reemplazar recurso existente
// PATCH reemplazar un elemento de un recurso existente
// DELETE remover un recurso
