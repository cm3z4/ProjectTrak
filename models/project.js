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
  project_description: { type: String, required: false }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;