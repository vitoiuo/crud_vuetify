import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export default {
  getProjects: (callback) => {
    axios
      .get("api/categories")
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  },
  addProject: (callback, project) => {
    axios.post("api/categories", project).then((response) => {
      callback(response.data);
    });
  },
};
