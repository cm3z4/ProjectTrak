import axios from "axios";

export default {
  createProject: function (projectData) {
    return axios.post('/api/create', projectData)  
  },
};