const data = require("../data");
const auth = require("./auth");

module.exports = {
  find: (req, res) => {
    const loggedUser = auth.loginRequired(req, res);
    if (!loggedUser) {
      return;
    }
    const { id } = req.params;
    if (id != undefined) {
      const task = data.tasks.find((t) => t.id == id);
      if (!task || task.userId != loggedUser.id) {
        res.status(404).end();
        return;
      }
      res.send(task);
      return;
    }
    res.send(data.tasks.filter((t) => t.userId == loggedUser.id));
  },
  add: (req, res) => {
    const loggedUser = auth.loginRequired(req, res);
    if (!loggedUser) {
      return;
    }
    const { title, project, dueTo, isDone } = req.body;
    const id =
      data.tasks[data.tasks.length - 1] === undefined
        ? 1
        : data.tasks[data.tasks.length - 1]?.id + 1;
    const newTask = {
      id,
      title,
      project,
      isDone,
      dueTo,
      userId: loggedUser.id,
    };
    data.tasks.push(newTask);
    res.send(newTask);
  },
  update: (req, res) => {
    const loggedUser = auth.loginRequired(req, res);
    if (!loggedUser) {
      return;
    }
    const { id } = req.params;
    console.log(req.params);
    const task = data.tasks.find((t) => t.id == id);
    if (!id || !task || task.userId != loggedUser.id) {
      res.status(404).end();
      return;
    }
    const { title, project, isDone, dueTo, userId } = req.body;
    task.title = title;
    task.project = project;
    task.isDone = isDone;
    task.dueTo = dueTo;
    task.userId = userId;
    res.send(task);
  },
  remove: (req, res) => {
    const loggedUser = auth.loginRequired(req, res);
    if (!loggedUser) {
      return;
    }
    const { id } = req.params;
    const task = data.tasks.find((t) => t.id == id);
    const index = data.tasks.indexOf(task);
    console.log(task);
    data.tasks.splice(index, 1);
    res.send(task);
  },
};
