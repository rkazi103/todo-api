import { Request, Response } from "express";

const getTodos = (req: Request, res: Response) => {
  res.send("Return all todos");
};

const createTodo = (req: Request, res: Response) => {
  res.send("create a todo");
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
