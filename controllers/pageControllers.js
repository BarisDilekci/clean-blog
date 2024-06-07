const Post = require('../models/Post');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add_post');
};

exports.getPostPage = async (req, res) => {
  console.log(req.params.id);
  const mypost = await Post.findById(req.params.id);
  res.render('post', {
    mypost,
  });
};

exports.getEditPage = async (req, res) => {
  console.log(req.params.id);
  const mypost = await Post.findById(req.params.id);
  console.log(mypost);
  res.render('edit', {
    mypost,
  });
};