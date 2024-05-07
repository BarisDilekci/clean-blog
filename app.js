
const ejs = require("ejs");
const express = require("express");
const Blog = require('./models/Blog');
const mongoose = require('mongoose');
const path = require("path");
const app = express();

mongoose.connect('mongodb://localhost/Blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.render('index', { blogs });
  } catch (err) {
    console.error('Veritabanından blogları alma hatası:', err);
    res.status(500).send('Veritabanından blogları alma hatası');
  }
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/blogs", async (req, res) => {
  try {
    console.log(req.body);
    const { title, detail, author } = req.body;
    if (!title || !detail) {
      throw new Error('Başlık ve detay alanları zorunludur.');
    }
    await Blog.create({ title, detail, author });
    res.redirect('/');
  } catch (err) {
    console.error('Blog oluşturma hatası:', err);
    res.status(500).send('Blog oluşturma hatası');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} üzerinde başlatıldı...`);
});
