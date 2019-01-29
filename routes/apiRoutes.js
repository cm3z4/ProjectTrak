const router = require('express').Router();

// Database configuration.
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project-trak';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const db = mongoose.connection;

// Check for a connection.
db.once('open', () => {
    console.log('Houston, we have a connection!');
});

// Checking for errors.
db.on('error', (err) => {
    console.log('Database error: ', err);
});

// Require all models.
const models = require('../models');

// Create a project and store in project-trak db.
router.post("/create", (req, res) => {

    console.log("The /create route is working.");

    let data = req.body;
    console.log(data);

    models.Project.create(data)
        .then(function (dbProject) {
            console.log(dbProject);
        })
        .catch(function (err) {
            console.log(err);
        });

});

module.exports = router;