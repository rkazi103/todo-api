import mongoose from "mongoose";

interface Todo {
  name: string;
  completed: boolean;
}

const TodoSchema = new mongoose.Schema<Todo>({
  name: {
    type: String,
    required: [true, "Must provide a name"],
    trim: true,
    maxlength: [20, "Name can't be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.model<Todo>("Todo", TodoSchema);
