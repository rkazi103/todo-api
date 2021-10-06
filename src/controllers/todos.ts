import { Request, Response } from "express";
import Todo from "../models/Todo";

const getTodos = (req: Request, res: Response) => {
  res.send("Return all todos");
};

const createTodo = async (req: Request, res: Response) => {
  const todo = await Todo.create(req.body);
  res.status(201).json({ todo });
};

const getTodo = (req: Request, res: Response) => {
  res.send("get a single todo");
};

const updateTodo = (req: Request, res: Response) => {
  res.send("update a todo");
};

const deleteTodo = (req: Request, res: Response) => {
  res.send("delete todo");
};

export default { getTodos, createTodo, getTodo, updateTodo, deleteTodo };
