import axios from "axios"

axios.defaults.baseURL = "http://localhost:3000"

export default {
  getTasks(callback) {
    axios.get("/tasks").then((response) => callback(response.data))
  },
  delTask(callback, id) {
    axios.delete(`/tasks/${id}`).then(() => callback())
  },
  addTask(callback, task) {
    axios.post("/tasks", task).then(() => callback())
  },
  editTask(callback, task) {
    axios.put(`/tasks/${task.id}`, task).then(() => callback())
  },
}
