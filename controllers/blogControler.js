const Blog = require('../models/blog')

const blogIndex = (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', { title: 'all blog', blogs: result })
        })
        .catch((err) => {
            console.log(err)
        })

}

const fullBlog = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('fullblog', { title: 'all blog', blog: result })
        })
        .catch((err) => {
            console.log(err)
        })
}

const blogCreate = (req, res) => {
    res.render('create', { title: 'create blog' })
}

const blogPost = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err)
        })
}

const blogDelete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/' });
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = { blogIndex, fullBlog, blogCreate, blogPost, blogDelete }