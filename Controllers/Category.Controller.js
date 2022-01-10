const Category = require('../Models//category.Model')
const mongoose = require("mongoose")

// all the logic part is written here

module.exports = {

// get all the category

    getAllCategories: async (req, res, next) => {
        try {
            const results = await Category.find();
            res.send(results);
        } catch (error) {
            console.log(error.message)
        }
    },

// find the category by using id

    findCategoryById: async (req, res, next) => {
        const id = req.params.id
        try {
            const category = await Category.findById(id)
            res.send(category)
        } catch (error) {
            console.log(error.message)
        }
    },


 //create new category

    createNewCategory: (req, res, next) => {
        console.log(req.body);
        const category  = new Category({
            categoryId: mongoose.Types.ObjectId(),
            categoryName: req.body.categoryName,
        })
        category
        .save()
        .then(result => {
            console.log(result);
            res.send(result)
        })
        .catch(err => {
            console.log(err.message);
        })
    },

//update a category

    updateACategory: async (req, res, next) => {
    
        try {
            const id = req.params.id
            const update = req.body
            const option = {new: true}
            const result = await Category.findByIdAndUpdate(id, update, option)
            res.send(result)
        } catch (error) {
            console.log(error.message)
        }
    },

// delete a category

    deleteACategory: async (req, res, next) => {
        const id = req.params.id
        try {
            const result = await Category.findByIdAndDelete(id)
            res.send(result)
            
        } catch (error) {
    
            console.log(error.message)
            
        }
    }
}
