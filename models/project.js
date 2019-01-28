const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  salesman: { type: String, required: true },
  project_name: { type: String, required: true},
  status: { type: String, required: true },
  company_name: { type: String, required: true },
  company_address: { type: String, required: true },
  contact_name: { type: String, required: true },
  contact_number: { type: String, required: true },
  contact_email: { type: String, required: true },
  estimated_start: { type: Date, required: true },
  estimated_finish: { type: Date, required: true },
  estimated_value: { type: Number, required: true },
  discription: { type: String, required: true }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;