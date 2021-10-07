import express from "express";
import controller from "../controllers/todos";

const router = express.Router();

router.route("/").get(controller.getTodos).post(controller.createTodo);
router
  .route("/:id")
  .get(controller.getTodo)
  .patch(controller.updateTodo)
  .delete(controller.deleteTodo);

export default router;
