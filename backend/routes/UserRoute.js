const express = require('express')

//controllers
const UserController = require('../controllers/UserController')

const route = express.Router()

route.get('/users', UserController.index)

module.exports = route;

