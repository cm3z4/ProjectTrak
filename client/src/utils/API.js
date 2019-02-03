import axios from "axios";

export default {
  createProject: function (projectData) {
    return axios.post('/api/create', projectData);
  },
  updateProject: function (updateData) {
    return axios.post('/api/update', updateData);
  },
  deleteProject: function (deleteProject) {
    return axios.post('/api/delete', deleteProject);
  }
};