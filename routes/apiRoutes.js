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
            //console.log(dbProject);
        })
        .catch(function (err) {
            console.log(err);
        });

});

// Create a project and store in project-trak db.
router.post("/update", (req, res) => {

    console.log("The /update route is working.");

    let data = req.body;
    console.log(data);

    models.Project.findOneAndUpdate({ project_number: data.project_number }, data, { new: true })
        .then(function (updatedProject) {
            console.log(updatedProject);
        })
        .catch(function (err) {
            console.log(err);
        });

});

// Create a project and store in project-trak db.
router.post("/delete", (req, res) => {

    console.log("The /delete route is working.");

    let data = req.body;
    console.log(data);

    models.Project.findOneAndDelete({ project_number: data.project_number })
        .catch(function (err) {
            console.log(err);
        });
});

// Get all projects for project-trak db
router.get("/projects", (req, res) => {
    console.log("The /projects route is working.");
    models.Project
        .find(req.query)
        .sort({ date: -1 })
        .then(function (dbProject) {
            //console.log(dbProject)
            res.json(dbProject)
        })
        .catch(function (err) {
            console.log(err);
        });
});

let projectNum = { projectNum: "P-0000" };

router.get('/passid/:id', function (req, res) {
    console.log("passid = " + req.params.id)
    projectNum.projectNum = req.params.id;
    console.log("projectNum = " + projectNum.projectNum)
    res.redirect('/#/editProject');
});

router.get('/projectid', function (req, res) {
    console.log("projectid = " + projectNum.projectNum);
    res.json(projectNum);
});

router.get('/edit/:id', function (req, res) {
    models.Project.findOne({ project_number: req.params.id })
        .exec(function (err, projectInfo) {
            if (err) {
                console.log(err);
            } else {
                console.log(projectInfo);
                res.json(projectInfo);
            }
        });
});

module.exports = router;
