const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is invalid");
            }
        }
    },
    mobile: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    
})

adminSchema.pre('save', async function (next){
   
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

const Admin = mongoose.model('ADMIN', adminSchema)

module.exports = Admin