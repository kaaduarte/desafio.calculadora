// importando o módulo express

const express = require('express');
const app = express();
const PORT = 3000;

// array de piadas
const frases = [
    "eu vou aprender",
    "eu vou ser persistente",
    "eu amo javascript",
    "eu amo programar",

];

// middleware para registrar requisições
app.use((req, res, next) => {
    console.log(`requisição recebida: ${req.method} ${req.url}`);
    next();
});

// contador de acessos ao endpoint /joke
let frasesAccessCount = 0;

// rota para gerar uma piada aleatória
app.get('/frases', (req, res) => {
    frasesAccessCount++;
    const randomIndex = Math.floor(Math.random() * frases.length);
    const randomfrases = frases[randomIndex];
    res.send({
        frases: randomfrases,
        accesses: `Esta rota foi acessada ${frasesAccessCount} vezes!`
    });
});

// iniciando o servidor
app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});