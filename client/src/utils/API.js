import axios from "axios";

export default {
  createProject: function (projectData) {
    axios.post('/api/create', projectData)
      //.then(res => console.log(res))
      .catch(err => console.log(err));
  },
  getAllProjects: function () {
    axios.get('/api/projects')
      .catch(err => console.log(err))
  }
};