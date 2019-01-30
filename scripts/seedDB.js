const mongoose = require("mongoose");
const db = require("../models");

// This file empties the project collection and inserts the projects below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/pTrak"
);

const projectSeed = [
    {
        projectNumber: "P-4321",
        salesman: "John Smith",
        project_name: "new",
        status: "Prospect",
        company_name: "test",
        company_address: "test",
        contact_name: "test",
        contact_number: "test",
        contact_email: "test",
        estimated_start: new Date(Date.now()),
        estimated_finish: new Date(Date.now()),
        estimated_value: 500,
        discription: "test"
    }
];

db.Project
    .remove({})
    .then(() => db.Project.collection.insertMany(projectSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });