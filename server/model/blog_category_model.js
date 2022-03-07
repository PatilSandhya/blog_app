const mongoose = require('mongoose')

const blogCategorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
            default: 1 // 1 - english, 2 - chinese
        },
       
    }
);

const BlogCategory = mongoose.model('blogCategory', blogCategorySchema)

module.exports = BlogCategory;
