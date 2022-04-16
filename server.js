const express = require("express");
const mongoose = require("mongoose");
const Flower = require("./models/products");
const app = express();
require("dotenv").config();

// middleware
app.use(express.urlencoded({ extended: true }));
