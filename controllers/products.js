const express = require("express");
const Flower = require("../models/product");
const productRouter = express.Router();

// Seed
const flowerSeed = require("../models/seed");
productRouter.get("/seed", (req, res) => {
    Flower.deleteMany({}, (error, allFlowers) => {});
    Flower.create(flowerSeed, (error, data) => {
        res.redirect("/flowers");
    })
});

// Index route - show main page
productRouter.get("/", (req, res) => {
    Flower.find({}, (err, allFlowers) => {    
    res.render("index.ejs", { flowers: allFlowers });
    });
});


// Exports
module.exports = productRouter;