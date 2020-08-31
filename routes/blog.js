const express = require('express');
const blogCOntroller = require('../controllers/blogControler');



const routes = express.Router();

routes.get('/', blogCOntroller.blogIndex)

routes.post('/', blogCOntroller.blogPost)

routes.get('/create', blogCOntroller.blogCreate)

routes.get('/:id', blogCOntroller.fullBlog)


routes.delete('/:id', blogCOntroller.blogDelete);

module.exports = { routes };