const express = require('express');
const routes = require('./routes');
const mongose = require('mongoose');

const socketio = require('socket.io');
const http = require('http');

const cors = require('cors');
const path = require('path');

const app = express();
const server = http.Server(app);
const io = socketio(server);


mongose.connect('mongodb+srv://augusto:augusto@cluster0-swlru.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
const connectedUsers = {};
io.on('connection', socket =>{
    
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next)=>{
   req.io = io;
   req.connectedUsers = connectedUsers; 

   return next();
})

//get post put delete

//req.querry = acessar query params(para filtos)
//req.params = acessar route params (para edição, delete)
//req.body = acessar coropo da requisição(para criação e edição)
app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','upload')));
app.use(routes);

server.listen(3333);
