const router = require('express').Router();
const mongoose = require('mongoose');

const models = require("../models");

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project-trak';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const db = mongoose.connection;


router.get("/create", (req, res) => {
    console.log("Testing...");
});

module.exports = router;