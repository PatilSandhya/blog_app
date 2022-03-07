const express = require('express');
const route = express.Router();
const services = require('../services/blogList_render');
const controller = require('../controller/blogList_ctr');


route.get('/blog-list',services.blog_list);
route.get('/blog-view',services.blog_view);
route.get('/blog-edit',services.blog_edit);


route.get('/allblog',controller.find);
route.put('/update-blog/:id',controller.update);
route.delete('/delete-blog/:id',controller.delete);
route.get('/detail-blog',controller.detailblog);
route.get('/detail-blogs',controller.blogwithcategory);




//route.get('/api/users',controller.find);



module.exports = route;
