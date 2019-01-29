const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectNumber: {type: String, required: true},
  salesman: { type: String, required: true },
  status: { type: String, required: true },
  company_name: { type: String, required: true },
  company_address: { type: String, required: true },
  contact_name: { type: String, required: true },
  contact_number: { type: String, required: true },
  contact_email: { type: String, required: true },
  estimated_start: { type: Date, required: true },
  estimated_finish: { type: Date, required: true },
  estimated_value: { type: Number, required: true },
  description: { type: String, required: true }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;