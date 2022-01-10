const express = require('express');
//console.log(require("mongoose").Types.ObjectId())
const mongoose = require("mongoose")
const router = express.Router();
const Product = require('../Models/Product.Model');
const ProductController = require('../Controllers/Product.Controller')

// create all the routes for product

router.get('/', ProductController.getAllProducts);

router.post('/', ProductController.createNewProduct);

router.get('/:id', ProductController.findProductById);

router.patch('/:id', ProductController.updateAPoduct);

router.delete('/:id', ProductController.deleteAProduct);

module.exports = router;