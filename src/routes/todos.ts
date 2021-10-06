import express from "express";
import controller from "../controllers/todos";

const router = express.Router();

router.route("/").get(controller.getTodos);
router.route("/").post(controller.createTodo);
router.route("/:id").get(controller.getTodo);
router.route("/:id").patch(controller.updateTodo);
router.route("/:id").delete(controller.deleteTodo);

export default router;
