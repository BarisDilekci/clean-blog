const express = require("express");
const mongoose = require("mongoose");

const app = express();
const BlogControllers = require("./controller/blogController");
const PageControllers = require("./controller/pageController");

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://clean-blog-user:EzqoDtC31Uca7B0A@cluster0.p502xvg.mongodb.net/clean-test-db"
);

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", BlogControllers.getAllPost);
app.get("/post/:id", BlogControllers.getPost);
app.post("/blog", BlogControllers.createPost);
app.put("/post/:id", BlogControllers.updatePost);
app.delete("/post/:id", BlogControllers.deletePost);

app.get("/about", PageControllers.getAboutPage);
app.get("/add_post", PageControllers.getAddPage);
app.get("/post/_post/:id", PageControllers.getEditPage);

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı!`);
});