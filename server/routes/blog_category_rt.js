const express = require('express');
const route = express.Router();
const services = require('../services/blog_category_render');
const controller = require('../controller/blog_category_ctr');



route.get('/blog-category',services.blog_category);


route.post('/add-blog-category',controller.create);
route.get('/blogcategory',controller.find);



module.exports = route;
