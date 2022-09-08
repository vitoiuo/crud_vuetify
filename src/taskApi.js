import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  getTasks(callback) {
    axios
      .get("/tasks")
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  },
};
