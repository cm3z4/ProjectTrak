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

// Get all projects for project-trak db
router.get("/projects", (req, res) => {
    console.log("the /project route is working");
    models.Project
        .find(req.query)
        .sort({ date: -1 })
        .then(function (dbProject) {
            console.log(dbProject)
            res.json(dbProject)
        })
        .catch(function (err) {
            console.log(err);
        });
});

let projectId = { projectId: "P-1000" };
router.get('/projectid', function (req, res) {
    console.log(projectId.projectId);
    res.json(projectId);
});

router.get('/passid/:id', function (req, res) {
    console.log(req.params.id)
    projectId.projectId = req.params.id;
    res.redirect('/#/editProject');
});

router.get('/edit/:id', function (req, res) {
    models.Project.findOne({ project_number: req.params.id })
        .exec(function (err, projectNum) {
            if (err) {
                console.log(err);
            } else {
                console.log(projectNum);
                res.json(projectNum);
            }
        });
});

module.exports = router;