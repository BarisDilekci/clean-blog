const Post = require('../models/Post');

exports.getAllPost = async (req, res) => {
  const posts = await Post.find({}).sort({ dateCreated: -1 });
  res.render('index', {
    posts,
  });
};

exports.addPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.deletePost = async (req, res) => {
  await Post.findOneAndRemove({ _id: req.params.id });
  res.redirect('/');
};

exports.editPost = async (req, res) => {
  console.log(req.body);
  const mypost = await Post.findById(req.params.id);
  console.log(mypost);
  mypost.name = req.body.name;
  mypost.message = req.body.message;
  mypost.save();
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  const mypost = await Post.findById(req.params.id);
  mypost.name = req.body.name;
  mypost.message = req.body.message;
  mypost.save();
  res.redirect(`/`);
};