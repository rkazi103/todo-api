const getAllTodos = (req, res) => {
  res.send("return all todos");
};

const createNewTodo = (req, res) => {
  res.send("create a todo");
};

const getTodo = (req, res) => {
  res.send("get a single todo");
};

const updateTodo = (req, res) => {
  res.send("update a todo");
};

const deleteTodo = (req, res) => {
  res.send("delete todo");
};

module.exports = {
  getAllTodos,
  createNewTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
