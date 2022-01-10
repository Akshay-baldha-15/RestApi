
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Category = require('../Models/category.Model');

// create schema for database

const ProductSchema = new Schema({
    productId: {
        type: String,
        required: true
    },

    productName: {
        type: String,
        required: true
    },

    qtyPerUnit: {
        type: Number,
        required: true
    },

    unitPrice: {
        type: Number,
        required: true
    },
    
    unitInStock: {
        type: Number,
        required: true
    },

    discontinued: {
        type: Boolean,
        required: true
    },

    categoryId: {
        type: String,
    } 

})

const Product = mongoose.model('product', ProductSchema)
module.exports = Product