const mongoose = require("mongoose");
const db = require("../models");

// This file empties the project collection and inserts the projects below.

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/project-trak"
    //"mongodb://#:#@ds121135.mlab.com:21135/heroku_lw9gbz1g"
);

const projectSeed = [
    {
        project_number: "P-1000",
        salesman: "Thomas Mason",
        status: "Won",
        company_name: "Exxon Mobil",
        company_address: "3525 Decker Dr, Baytown, TX 77520",
        contact_name: "Tim Williams",
        contact_number: "(346) 259-5305",
        contact_email: "twilliams@exxonmobil.com",
        estimated_start: "2019-03-04T00:00:00.000Z",
        estimated_finish: "2019-04-08T00:00:00.000Z",
        estimated_value: 322000,
        project_description: "FCC Unit w/tower & drums.",
        estimator: "Jerry Barnes",
        revision_number: 1,
        type: "Time & Materials",
        bid_due: "2019-02-04T00:00:00.000Z",
        bid_submitted: "2019-02-03T00:00:00.000Z",
        estimated_award: "2019-03-03T00:00:00.000Z",
        pln_start: "2019-03-04T00:00:00.000Z",
        pre_start: "2019-03-04T00:00:00.000Z",
        tar_start: "2019-03-04T00:00:00.000Z",
        pst_start: "2019-03-04T00:00:00.000Z",
        proposed_end: "2019-03-04T00:00:00.000Z",
        proposed_hours: 750,
        proposed_value: 268665,
        estimator_notes: "Need to order materials ASAP!",
        actual_pln_start: null,
        actual_pre_start: "2019-03-04T00:00:00.000Z",
        actual_tar_start: "2019-03-11T00:00:00.000Z",
        actual_pst_start: "2019-03-18T00:00:00.000Z",
        actual_end: "2019-04-08T00:00:00.000Z",
        actual_hours: 882,
        actual_value: 310552,
    },
    {
        project_number: "P-1001",
        salesman: "Mark Ledbetter",
        status: "Bidding",
        company_name: "Valero Ardmore Refinery",
        company_address: "1 Valero Way, Ardmore, OK 73401",
        contact_name: "Terry Miller",
        contact_number: "(580) 223-0534",
        contact_email: "tmiller@valero.com",
        estimated_start: "2019-05-06T00:00:00.000Z",
        estimated_finish: "2019-05-30T00:00:00.000Z",
        estimated_value: 816466,
        project_description: "OCI towers C-101 & C-102 and weld buildup.",
        estimator: "",
        revision_number: 0,
        type: "Time & Materials",
        bid_due: null,
        bid_submitted: null,
        estimated_award: null,
        pln_start: null,
        pre_start: null,
        tar_start: null,
        pst_start: null,
        proposed_end: null,
        proposed_hours: 0,
        proposed_value: 0,
        estimator_notes: "",
        actual_pln_start: null,
        actual_pre_start: null,
        actual_tar_start: null,
        actual_pst_start: null,
        actual_end: null,
        actual_hours: 0,
        actual_value: 0,
    },
    {
        project_number: "P-1002",
        salesman: "Tim Cunningham",
        status: "Won",
        company_name: "Marathon Texas City Refinery",
        company_address: "502 10th St S, Texas City, TX 77590",
        contact_name: "Mike Smith",
        contact_number: "(409) 943-7585",
        contact_email: "msmith@marathon.com",
        estimated_start: "2019-06-03T00:00:00.000Z",
        estimated_finish: "2019-07-24T00:00:00.000Z",
        estimated_value: 1552877,
        project_description: "Major exchanger T/A and tower repairs.",
        estimator: "",
        revision_number: 0,
        type: "Time & Materials",
        bid_due: null,
        bid_submitted: null,
        estimated_award: null,
        pln_start: null,
        pre_start: null,
        tar_start: null,
        pst_start: null,
        proposed_end: null,
        proposed_hours: 0,
        proposed_value: 0,
        estimator_notes: "",
        actual_pln_start: null,
        actual_pre_start: null,
        actual_tar_start: null,
        actual_pst_start: null,
        actual_end: null,
        actual_hours: 0,
        actual_value: 0,
    },
    {
        project_number: "P-1003",
        salesman: "Mark Ledbetter",
        status: "Bidding",
        company_name: "Citgo",
        company_address: "1330 12th St, Lake Charles, LA 70601",
        contact_name: "Don Wilson",
        contact_number: "(337) 721-8010",
        contact_email: "dwilson@citgo.com",
        estimated_start: "2019-09-09T00:00:00.000Z",
        estimated_finish: "2019-09-23T00:00:00.000Z",
        estimated_value: 566782,
        project_description: "Replace 40 trays in tower T-401.",
        estimator: "",
        revision_number: 0,
        type: "Time & Materials",
        bid_due: null,
        bid_submitted: null,
        estimated_award: null,
        pln_start: null,
        pre_start: null,
        tar_start: null,
        pst_start: null,
        proposed_end: null,
        proposed_hours: 0,
        proposed_value: 0,
        estimator_notes: "",
        actual_pln_start: null,
        actual_pre_start: null,
        actual_tar_start: null,
        actual_pst_start: null,
        actual_end: null,
        actual_hours: 0,
        actual_value: 0,
    },
    {
        project_number: "P-1004",
        salesman: "Thomas Mason",
        status: "Lost",
        company_name: "Westlake Chemical",
        company_address: "1300 PPG Dr, Westlake, LA 70669",
        contact_name: "Tony Cooper",
        contact_number: "(337) 708-4500",
        contact_email: "tcooper@westlakechemical.com",
        estimated_start: "2019-08-15T00:00:00.000Z",
        estimated_finish: "2019-08-29T00:00:00.000Z",
        estimated_value: 661589,
        project_description: "Demo T-404 tower.",
        estimator: "",
        revision_number: 0,
        type: "Time & Materials",
        bid_due: null,
        bid_submitted: null,
        estimated_award: null,
        pln_start: null,
        pre_start: null,
        tar_start: null,
        pst_start: null,
        proposed_end: null,
        proposed_hours: 0,
        proposed_value: 0,
        estimator_notes: "",
        actual_pln_start: null,
        actual_pre_start: null,
        actual_tar_start: null,
        actual_pst_start: null,
        actual_end: null,
        actual_hours: 0,
        actual_value: 0,
    },
    {
        project_number: "P-1005",
        salesman: "Tim Cunningham",
        status: "Bidding",
        company_name: "Oneok Hydrocarbons",
        company_address: "9900 FM1942, Baytown, TX 77521",
        contact_name: "Jim Baker",
        contact_number: "(281) 385-3562",
        contact_email: "jbaker@oneok.com",
        estimated_start: "2019-03-11T00:00:00.000Z",
        estimated_finish: "2019-03-23T00:00:00.000Z",
        estimated_value: 423667,
        project_description: "Install new E-220 exchanger.",
        estimator: "",
        revision_number: 0,
        type: "Time & Materials",
        bid_due: null,
        bid_submitted: null,
        estimated_award: null,
        pln_start: null,
        pre_start: null,
        tar_start: null,
        pst_start: null,
        proposed_end: null,
        proposed_hours: 0,
        proposed_value: 0,
        estimator_notes: "",
        actual_pln_start: null,
        actual_pre_start: null,
        actual_tar_start: null,
        actual_pst_start: null,
        actual_end: null,
        actual_hours: 0,
        actual_value: 0,
    },
    {
        project_number: "P-1006",
        salesman: "Tim Cunningham",
        status: "Won",
        company_name: "Shell - Deer Park, TX",
        company_address: "5900 Hwy 225, Deer Park, TX 77536",
        contact_name: "Mark Berry",
        contact_number: "(713) 246-7301",
        contact_email: "markb@shell.com",
        estimated_start: "2019-05-13T00:00:00.000Z",
        estimated_finish: "2019-06-21T00:00:00.000Z",
        estimated_value: 578662,
        project_description: "Installing two new towers.",
        estimator: "",
        revision_number: 0,
        type: "Time & Materials",
        bid_due: null,
        bid_submitted: null,
        estimated_award: null,
        pln_start: null,
        pre_start: null,
        tar_start: null,
        pst_start: null,
        proposed_end: null,
        proposed_hours: 0,
        proposed_value: 0,
        estimator_notes: "",
        actual_pln_start: null,
        actual_pre_start: null,
        actual_tar_start: null,
        actual_pst_start: null,
        actual_end: null,
        actual_hours: 0,
        actual_value: 0,
    },
    {
        project_number: "P-1007",
        salesman: "Mark Ledbetter",
        status: "Bidding",
        company_name: "Texas Molecular",
        company_address: "2525 Independence Pkwy, Deer Park, TX 77536",
        contact_name: "Wade Robins",
        contact_number: "(281) 930-2525",
        contact_email: "wrobins@texasmolecular.com",
        estimated_start: "2019-02-22T00:00:00.000Z",
        estimated_finish: "2019-03-16T00:00:00.000Z",
        estimated_value: 216544,
        project_description: "Install new trays in tower C-401.",
        estimator: "",
        revision_number: 0,
        type: "Time & Materials",
        bid_due: null,
        bid_submitted: null,
        estimated_award: null,
        pln_start: null,
        pre_start: null,
        tar_start: null,
        pst_start: null,
        proposed_end: null,
        proposed_hours: 0,
        proposed_value: 0,
        estimator_notes: "",
        actual_pln_start: null,
        actual_pre_start: null,
        actual_tar_start: null,
        actual_pst_start: null,
        actual_end: null,
        actual_hours: 0,
        actual_value: 0,
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
