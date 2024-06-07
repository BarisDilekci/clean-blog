// routes/pageRoutes.js
const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageControllers');

router.get('/about', pageController.getAboutPage);
router.get('/add_post', pageController.getAddPage);
router.get('/myposts/:id', pageController.getPostPage);
router.post('/post/edit/:id', pageController.getEditPage);


module.exports = router;
