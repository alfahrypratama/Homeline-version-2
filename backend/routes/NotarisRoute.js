const express = require('express')

//controllers
const NotarisController = require('../controllers/NotarisController')

const route = express.Router()

route.get('/jasa-notaris', NotarisController.jasaNotaris)

module.exports = route;

