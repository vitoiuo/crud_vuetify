import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  getUser(callback, user) {
    axios.get(`/users/${user.id}`).then(() => callback());
  },
  addUser(callback, user) {
    axios.post("/users", user).then(() => callback());
  },
  editUser(callback, user) {
    axios.put(`/users/${user.id}`, user).then(() => callback());
  },
};
