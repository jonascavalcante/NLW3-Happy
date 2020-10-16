/* IMPORTAR DEPENDECIA */
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

/* INICIANDO O EXPRESS */
const server = express()
server
.use(express.static('public'))

/* CONFIGURAR TEMPLATE ENGINE */
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

/* ROTAS DA APLICAÇÃO */
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)

/* LIGAR O SERVIDOR */
server.listen(5500)