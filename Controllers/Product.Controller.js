const Product = require('../Models//Product.Model')
const mongoose = require("mongoose")
const Category = require('../Models/category.Model');

module.exports = {
// get all the products from database

    getAllProducts :
        async (req, res, next) => {
            try {
                const results = await Product.find();
                res.send(results);
            } catch (error) {
                console.log(error.message);
            }
        },

// get the product by using id from database        

    findProductById: async (req, res, next) => {
        const id = req.params.id
        try {
            const product = await Product.findById(id)
            res.send(product)
        } catch (error) {
            console.log(error.message)
        }
    },

// create all products in database

    createNewProduct: async (req, res, next) => {

            try {
                const product = new Product({
                             productId: mongoose.Types.ObjectId(),
                             productName: req.body.productName,
                             qtyPerUnit: req.body.qtyPerUnit,
                             unitPrice: req.body.unitPrice,
                             unitInStock: req.body.unitInStock,
                             discontinued: req.body.discontinued,
                             categoryId : mongoose.Types.ObjectId()
                         })
                
                const result = await product.save();
                res.send(result);
            } catch (error) {
                console.log(error.message);
                if(error.name === 'validationError'){
                    next(createError(422, error.message));
                    return;
                }
                next(error);
            }
            // console.log(req.body);
            // const product  = new Product({
            //     productId: mongoose.Types.ObjectId(),
            //     productName: req.body.productName,
            //     qtyPerUnit: req.body.qtyPerUnit,
            //     unitPrice: req.body.unitPrice,
            //     unitInStock: req.body.unitInStock,
            //     discontinued: req.body.discontinued,
            //     categoryId: req.body.categoryId
            // })
    
        },

// update product in database        

        updateAPoduct: async (req, res, next) => {    
            try {
                const id = req.params.id;
                const updates = req.body;
                const options = {new: true};
                const result = await Product.findByIdAndUpdate(id, updates, options)
                res.send(result)
            } catch (error) {
                console.log(error.message)
            }
        },

//delete a product from database        

        deleteAProduct: async (req, res, next) => {
            const id = req.params.id
            try {
                const result = await Product.findByIdAndDelete(id)
                res.send(result)
            } catch (error) {
                console.log(error.message)        
            }
        }
    }
