const mongoose = require('mongoose')

const Schema = mongoose.Schema


// create schema for database

const CategorySchema = new Schema({
    categoryId: {
        type: String,
    },

    categoryName: {
        type: String,
        required: true
    }
})

const Category = mongoose.model('category', CategorySchema)
module.exports = Category