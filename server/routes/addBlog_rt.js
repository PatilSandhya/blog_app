const express = require('express');
const route = express.Router();
const services = require('../services/addBlog_render');
const controller = require('../controller/addBlog_ctr');

 const upload = require('../middleware/upload');

route.get('/add-blog', services.add_blog);



route.post('/addBlog', upload, controller.create);
route.get('/allblogcategory',controller.find);

//route.get('/api/users',controller.find);



module.exports = route;
