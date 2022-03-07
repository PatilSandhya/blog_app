const axios = require('axios');
//const bcrypt = require('bcrypt');
//const nodemailer = require("nodemailer");
//var Admin = require('../model/admin');




exports.blog_category = (req,res)=>{
    axios.get('http://localhost:3000/blogcategory')
    .then(function(response){
    console.log(response);
        res.render('blog_category', {blogcategory:response.data});
    })
    .catch(err =>{
        res.send(err);
    })
}


