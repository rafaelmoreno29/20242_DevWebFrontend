const express = require('express');
const usuarioRouter = require('./routes/usuario');
const lista1Router = require('./routes/lista1');

const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use('/usuario', usuarioRouter);
app.use('/lista1', lista1Router);


mongoose.connect('mongodb+srv://rafaelmorenosax:kpD7heAn6IEem6wC@cluster0.ugdx6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3000');
        })
    })
    .catch((err) => {
        console.log(err);
    });
