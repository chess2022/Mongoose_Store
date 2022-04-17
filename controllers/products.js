const express = require("express");
const Product = require("../models/product");
const productRouter = express.Router();

// Seed
const productSeed = require("../models/seed");
productRouter.get("/seed", (req, res) => {
    Product.deleteMany({}, (error, allProducts) => {});
    Product.create(productSeed, (error, data) => {
        res.redirect("/products");
    })
});

// Index route - show main page
productRouter.get("/", (req, res) => {
  res.render("index.ejs");
});


// Exports
module.exports = productRouter;