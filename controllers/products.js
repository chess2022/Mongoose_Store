const express = require("express");
const Product = require("../models/product");
const productRouter = express.Router();

// Seed
const seed = require("..models/seed");
productRouter.get("/seed", (req, res) => {
    Product.deleteMany({}, (error, allProducts) => {});
    Product.create(seed, (error, data) => {
        res.redirect("/products");
    })
});



// Exports
module.exports = productRouter;