const utils = require("../utils");

module.exports = {
  users: utils.parseJson("./data/users.json"),
  tasks: utils.parseJson("./data/tasks.json"),
  categories: utils.parseJson("./data/categories.json"),
};
