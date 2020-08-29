const express = require('express');
const mongoose = require('mongoose');

const Blog = require('./models/blog')

const app = express();

app.set('view engine', 'ejs')
    // const PORT = 3000;
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const dbURI = 'mongodb+srv://admin:learn123@learningcluster.dibp0.mongodb.net/learing?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


app.get('/', (req, res) => {

    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'about Page' })
})

app.get('/blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', { title: 'all blog', blogs: result })
        })
        .catch((err) => {
            console.log(err)
        })
})
app.post('/blogs', (req, res) => {
    console.log(req.body)
})

app.get('blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blog' })
})




app.use((req, res) => {
    res.render('404')
})