const express = require('express');
const mongoose = require('mongoose');
const blogroutes = require('./routes/blog')

const app = express();

app.set('view engine', 'ejs');
const port = process.env.PORT || 3000;
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const dbURI = process.env.MONGO_URI || 'mongodb+srv://alocalhost/learing?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((result) => app.listen(port))
    .catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'about Page' })
})

app.use('/blogs', blogroutes.routes)

app.use((req, res) => {
    res.render('404', { title: 'not Found' })
})
