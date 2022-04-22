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

// New route
productRouter.get("/new", (req, res) => {
    Flower.find({}, (err, flower) => {
    res.render("new.ejs", { flower, index: req.params.id });
    })
})

// create
productRouter.post("/", (req, res) => {
    Flower.create(req.body, (err, newFlower) => {
    res.redirect("/flowers");
    // console.log(newFlower)
  });
});

// Delete
productRouter.delete("/:id", (req, res) => {
  Flower.findByIdAndDelete(req.params.id, (err) => {
    res.redirect("/flowers");
  });
});

// Update route - update flower to the data file
productRouter.put("/:id", (req, res) => {
    Flower.findByIdAndUpdate(req.params.id, req.body, (err, updatedFlower) => {
      if (err) return res.send(err);
      res.redirect(`/flowers/${req.params.id}`);
    })
})

// Edit route - edit an existing flower
productRouter.get("/:id/edit", (req, res) => {
    Flower.findById(req.params.id, (err, flower) => {
    res.render("edit.ejs", { flower, index: req.params.id });
    });
});

// Show route - show flower detail
productRouter.get("/:id", (req, res) => {
    Flower.findById(req.params.id, (err, flower) => {
        res.render("detail.ejs", { flower })
    })
});


// Exports
module.exports = productRouter;
