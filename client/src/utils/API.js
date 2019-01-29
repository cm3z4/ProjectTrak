import axios from "axios";

export default {
  // create a project
  createProject: function (projectData) {
    console.log(projectData);
    return axios.post("/api/projects", projectData);
  },
  // get all projects in the db
  getProject: function () {
    return axios.get("/api/projects")
  },
  // gets a specific project by id
  getProjectByID: function (id) {
    return axios.get(`/api/saved/${id}`);
  },
  // deletes a project with the given id
  deleteProject: function (id) {
    return axios.delete(`/api/saved/${id}`);
  },
  // saves a project to user project list
  saveProject: function (bookData) {
    return axios.post("/api/saved", bookData);
  }
};
