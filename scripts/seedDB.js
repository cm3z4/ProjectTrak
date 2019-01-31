const mongoose = require("mongoose");
const db = require("../models");

// This file empties the project collection and inserts the projects below.

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/project-trak"
);

const projectSeed = [
    {
        project_number: "P-1000",
        salesman: "John Smith",
        status: "Won",
        company_name: "Exxon",
        company_address: "Test",
        contact_name: "Test",
        contact_number: "Test",
        contact_email: "Test",
        estimated_start: new Date(Date.now()),
        estimated_finish: new Date(Date.now()),
        estimated_value: 876552,
        project_description: "Test"
    },
    {
        project_number: "P-1001",
        salesman: "John Smith",
        status: "Won",
        company_name: "Valero",
        company_address: "Test",
        contact_name: "Test",
        contact_number: "Test",
        contact_email: "Test",
        estimated_start: new Date(Date.now()),
        estimated_finish: new Date(Date.now()),
        estimated_value: 256125,
        project_description: "Test"
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
    