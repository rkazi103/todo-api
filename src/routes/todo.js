const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  createNewTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} = require("../controllers/todo");

router.route("/").get(getAllTodos);
router.route("/").post(createNewTodo);
router.route("/:id").get(getTodo);
router.route("/:id").patch(updateTodo);
router.route("/:id").delete(deleteTodo);

module.exports = router;
