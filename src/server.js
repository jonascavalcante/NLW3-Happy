/* IMPORTAR DEPENDECIA */
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

/* INICIANDO O EXPRESS */
const server = express()
server

/* UTILIZAR O BODY DO REQ */
.use(express.urlencoded({ extended: true }))

/* CONFIGURAR TEMPLATE ENGINE */
.use(express.static('public'))

/* CONFIGURAR TEMPLATE ENGINE */
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

/* ROTAS DA APLICAÇÃO */
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

/* LIGAR O SERVIDOR */
server.listen(5500)