const express = require('express');

const app = express();

app.use(express.json());

app.get('/teste', (req, res) => {
    res
        .status(200)
        .send({mensagem: "Deu certo"});
});

module.exports = app;