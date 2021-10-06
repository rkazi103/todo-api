import mongoose from "mongoose";

export default function connectToDatabase(url: string): Promise<void> {
  return mongoose
    .connect(url)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.error(`Error trying to connect to: ${err}`));
}
