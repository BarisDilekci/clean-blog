const Post = require('../models/Post');

exports.getAllPost = async (req, res) => {
  const post = await Post.find({}).sort({ dateCreated: -1 });
  res.render('index', {
    post,
  });
};

exports.addPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/");
};


exports.editPost = async (req, res) => {
  try {
    const mypost = await Post.findById(req.params.id);
    if (!mypost) {
      return res.status(404).send("Post not found");
    }
    mypost.name = req.body.name;
    mypost.message = req.body.message;
    await mypost.save();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};


exports.updatePost = async (req, res) => {
  const mypost = await Post.findById(req.params.id);
  mypost.name = req.body.name;
  mypost.message = req.body.message;
  mypost.save();
  res.redirect(`/`);
};