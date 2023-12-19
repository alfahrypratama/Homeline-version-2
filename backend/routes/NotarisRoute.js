const express = require('express')

//controllers
const NotarisController = require('../controllers/NotarisController')

const route = express.Router()

route.get('/jasa-notaris', NotarisController.jasaNotaris)
route.post('/admin-post-notaris', NotarisController.postNotaris)

module.exports = route;

