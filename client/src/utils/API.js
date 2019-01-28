import axios from "axios";

export default {
  createProject: function(projectData) {
    console.log(projectData);
    return axios.post("/create", projectData);
  }
};
