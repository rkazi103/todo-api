import { Request, Response } from "express";
import Todo from "../models/Todo";
import asyncWrapper from "../middleware/asyncWrapper";

const getTodos = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  }
);

const createTodo = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  }
);

const getTodo = asyncWrapper(
  async (
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> => {
    const { id: todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId });

    if (!todo)
      return res.status(404).json({ msg: `No task with id ${todoId}` });

    res.status(200).json({ todo });
  }
);

const updateTodo = asyncWrapper(
  async (
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> => {
    const { id: todoId } = req.params;

    const todo = await Todo.findOneAndUpdate({ _id: todoId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo)
      return res.status(404).json({ msg: `No task with id ${todoId}` });

    res.status(200).json({ todo });
  }
);

const deleteTodo = asyncWrapper(
  async (
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> => {
    const { id: todoId } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: todoId });

    if (!todo)
      return res.status(404).json({ msg: `No task with id ${todoId}` });

    res.status(200).json({ todo });
  }
);

export default { getTodos, createTodo, getTodo, updateTodo, deleteTodo };
