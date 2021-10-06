import { Request, Response } from "express";
import Todo from "../models/Todo";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTodo = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId });

    if (!todo)
      return res.status(404).json({ msg: `No task with id ${todoId}` });

    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTodo = (req: Request, res: Response) => {
  res.send("update a todo");
};

const deleteTodo = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: todoId });

    if (!todo)
      return res.status(404).json({ msg: `No task with id ${todoId}` });

    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export default { getTodos, createTodo, getTodo, updateTodo, deleteTodo };
