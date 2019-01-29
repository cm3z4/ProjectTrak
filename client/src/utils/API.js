import axios from "axios";

export default {
  createProject: function (projectData) {
    axios.post('/api/create', projectData)
      //.then(res => console.log(res))
      .catch(err => console.log(err));
  }
};
