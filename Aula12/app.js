const express = require('express');
const usuarioRouter = require('./routes/usuario');

const app = express();
app.use(express.json());
app.use('/usuario', usuarioRouter);


app.listen(3000, () => console.log('Servidor rodando na porta: 3000'));