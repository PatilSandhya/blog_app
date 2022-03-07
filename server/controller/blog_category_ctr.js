var BlogCategory = require('../model/blog_category_model.js');
require('../database/connection');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }  
        const blogCategory = new BlogCategory({
        categoryName: req.body.categoryName,
        language: req.body.blogLanguage,
        });

        blogCategory.save().then(data => {
        //res.send(data)
        res.redirect('/blog-category');
        console.log('category created');
        //return res.status(201).json({ error: "user register"});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error in createing category"
        });
    });
    
}

exports.find = (req, res) =>{
    BlogCategory.find()
    .then(blogcategory =>{
        res.send(blogcategory)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "error occured"});
    })
}




