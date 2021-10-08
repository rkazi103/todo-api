import { NextFunction, Request, Response } from "express";
import Todo from "../models/Todo";
import asyncWrapper from "../middleware/asyncWrapper";
import { createCustomError } from "../errors/CutomAPIError";

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
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId });

    if (!todo) return next(createCustomError(`No todo with id ${todoId}`, 404));

    res.status(200).json({ todo });
  }
);

const updateTodo = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: todoId } = req.params;

    const todo = await Todo.findOneAndUpdate({ _id: todoId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo) return next(createCustomError(`No todo with id ${todoId}`, 404));

    res.status(200).json({ todo });
  }
);

const deleteTodo = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: todoId } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: todoId });

    if (!todo) return next(createCustomError(`No todo with id ${todoId}`, 404));

    res.status(200).json({ todo });
  }
);

export default { getTodos, createTodo, getTodo, updateTodo, deleteTodo };
