const axios = require('axios');
const bcrypt = require('bcrypt');
//const nodemailer = require("nodemailer");
var Admin = require('../model/admin');


exports.HomeRoute = (req,res)=>{
    res.render('login');
}






exports.log_in = async(req, res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            res.status(400).json({message:"Content can not be empty"});
            return;
        }
         const AdminLogin = await Admin.findOne({email: email});
        if(AdminLogin){
            const passMatch = await bcrypt.compare(password, AdminLogin.password);
            const name = AdminLogin.name
            const Adminemail = AdminLogin.email
            if(!passMatch){
                res.json({message:"wrong password"});
                console.log("wrong password");

            }
            else{             
                console.log(Adminemail);
                res.redirect('/blog-list');

            } 
        }else{
            res.json({message:"Email is not registered!"});
        }
        
    }
    catch (err){
        console.log(err);
    }
}

