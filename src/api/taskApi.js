import api from "@/api/index";

export default {
  getTasks: (callback) => {
    api
      .get("/api/tasks")
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        return error;
      });
  },
  delTask: (callback, taskId) => {
    api
      .delete(`/api/tasks/${taskId}`)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        return error;
      });
  },
  addTask(callback, task) {
    api
      .post("api/tasks", task)
      .then(() => callback())
      .catch((error) => {
        return error;
      });
  },
  editTask(callback, task) {
    api
      .post(`api/tasks/${task.id}`, task)
      .then(() => callback())
      .catch((e) => {
        return e;
      });
  },
};
