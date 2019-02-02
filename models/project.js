const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  project_number: { type: String, required: true },
  salesman: { type: String, required: true },
  status: { type: String, required: true },
  company_name: { type: String, required: false },
  company_address: { type: String, required: false },
  contact_name: { type: String, required: false },
  contact_number: { type: String, required: false },
  contact_email: { type: String, required: false },
  estimated_start: { type: Date, required: false },
  estimated_finish: { type: Date, required: false },
  estimated_value: { type: Number, required: false },
  project_description: { type: String, required: false },
  estimator: { type: String, required: false },
  revision_number: { type: Number, required: false },
  type: { type: String, required: false },
  bid_due: { type: Date, required: false },
  bid_submitted: { type: Date, required: false },
  estimated_award: { type: Date, required: false },
  pln_start: { type: Date, required: false },
  pre_start: { type: Date, required: false },
  tar_start: { type: Date, required: false },
  pst_start: { type: Date, required: false },
  proposed_end: { type: Date, required: false },
  proposed_hours: { type: Number, required: false },
  proposed_value: { type: Number, required: false },
  estimator_notes: { type: String, required: false },
  actual_pln_start: { type: Date, required: false },
  actual_pre_start: { type: Date, required: false },
  actual_tar_start: { type: Date, required: false },
  actual_pst_start: { type: Date, required: false },
  actual_end: { type: Date, required: false },
  actual_hours: { type: Number, required: false },
  actual_value: { type: Number, required: false },

});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;