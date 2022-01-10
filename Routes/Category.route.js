const express = require('express');
const mongoose = require("mongoose")
const router = express.Router();
const Category = require('../Models/category.Model');
const CategoryController = require("../Controllers/Category.Controller")

// create all the routes for category

router.get('/', CategoryController.getAllCategories);

router.post('/', CategoryController.createNewCategory);

router.get('/:id', CategoryController.findCategoryById);

router.patch('/:id',CategoryController.updateACategory);

router.delete('/:id', CategoryController.deleteACategory);
module.exports = router;