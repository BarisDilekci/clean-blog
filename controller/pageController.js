const blog = require('../models/Blog');

exports.getAboutPage = function (req, res) {
    res.render("about");
};

exports.getAddPage = function (req, res) {
    res.render("add_post");
};

exports.getEditPage = async function (req, res) {
    try {
      const post = await Blog.findOne({ _id: req.params.id });
      if (!post) {
        return res.status(404).send('Post not found');
      }
      console.log(post);
      res.render("edit_post", { post });
    } catch (err) {
      console.error('Error fetching post:', err);
      res.status(500).send('Server error');
    }
  };
