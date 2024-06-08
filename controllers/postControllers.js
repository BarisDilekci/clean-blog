const Post = require('../models/Post');

exports.getAllPost = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const postPerPage = 3;
    const totalPost = await Post.countDocuments();

    const post = await Post.find({})
      .sort({ dateCreated: -1 })
      .skip((page - 1) * postPerPage)
      .limit(postPerPage);

    res.render('index', {
      post: post,
      current: page,
      pages: Math.ceil(totalPost / postPerPage)
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Internal Server Error');
  }
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