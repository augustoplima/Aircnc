const express = require('express');
const routes = require('./routes');
const mongose = require('mongoose');

const app = express();
mongose.connect('mongodb+srv://augusto:augusto@cluster0-swlru.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

//get post put delete

//req.querry = acessar query params(para filtos)
//req.params = acessar route params (para edição, delete)
//req.body = acessar coropo da requisição(para criação e edição)

app.use(express.json());
app.use(routes);

app.listen(3333);
