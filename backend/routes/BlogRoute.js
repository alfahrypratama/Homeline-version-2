const express = require('express')

//controllers
const BlogController = require('../controllers/BlogController')

const route = express.Router()

route.post('/post-blog', BlogController.postBlog)
route.get('/blog', BlogController.getBlog)

module.exports = route;