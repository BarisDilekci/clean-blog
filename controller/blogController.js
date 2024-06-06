const Blog = require('../models/Blog');
const fs = require('fs');


exports.getAllPost = async (req,res) => {
    const blog = await Blog.find({});
    res.render('index', {
        blog,
    });
};

exports.getPost = async function (req, res) {
    const id = req.params.id;
    const post = await Blog.findById(id);
    res.render("post", { post });
  };

  exports.createPost = async (req, res) => {
    await Blog.create(req.body);
    res.redirect("/");
  };
  
  exports.updatePost = async (req, res) => {
    const post = await Blog.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.content = req.body.content;
    post.author = req.body.author;
    post.save();
  
    res.redirect(`/post/${req.params.id}`);
  };
  
  exports.deletePost = async (req, res) => {
    await Blog.findByIdAndRemove(req.params.id);
    res.redirect("/");
  };