// forma antiga - comun js
// const express = require('express');

// forma atualizada moduleES
import express from 'express';
const app = express();
const hostname = '127.0.0.1'
const porta = 3000;

app.get('/', (req, res) => {
    res.send('Hello world, express!')
});

app.listen(porta, hostname, () => {
    console.log('o servidor esta rodando: http://localhost:3000');
    
});
