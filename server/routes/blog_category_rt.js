const express = require('express');
const route = express.Router();
const services = require('../services/blog_category_render');
const controller = require('../controller/blog_category_ctr');



route.get('/blog-category',services.blog_category);
route.get('/blog-category-edit',services.blogCategory_edit);



route.post('/add-blog-category',controller.create);
route.get('/blogcategory',controller.find);
route.put('/update-blogCategory/:id',controller.update);
route.delete('/delete-blogCategory/:id',controller.delete);


module.exports = route;
