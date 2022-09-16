import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export default {
  getTasks(callback) {
    axios.get("api/tasks").then((response) => callback(response.data));
  },
  delTask(callback, id) {
    axios.delete(`api/tasks/${id}`).then(() => callback());
  },
  addTask(callback, task) {
    axios.post("api/tasks", task).then(() => callback());
  },
  editTask(callback, task) {
    axios
      .post(`api/tasks/${task.id}`, task)
      .then(() => callback())
      .catch((e) => {
        console.log(e.message);
        return Promise.reject(e);
      });
  },
};
