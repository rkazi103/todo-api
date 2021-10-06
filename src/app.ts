import express from "express";
import todoRouter from "./routes/todos";
import connectToDatabase from "./db/connect";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1/todos", todoRouter);

async function main(): Promise<void> {
  const PORT: string | number = process.env.PORT || 3000;

  try {
    await connectToDatabase(process.env.DB_URI as string);
    app.listen(PORT, (): void => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.log(`Error! ${err}`);
  }
}

main();
