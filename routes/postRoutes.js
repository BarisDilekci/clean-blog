// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');

router.get('/', postController.getAllPost);
router.post('/add', postController.addPost);
router.delete('/post/:id', postController.deletePost);
router.put('/post/update/:id', postController.editPost);
router.delete("/post/:id", postController.deletePost);

module.exports = router;
