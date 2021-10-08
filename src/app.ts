import express from "express";
import todoRouter from "./routes/todos";
import connectToDatabase from "./db/connect";
import notFound from "./middleware/notFound";
import * as dotenv from "dotenv";
import errorHandlerMiddleware from "./middleware/errorHandler";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1/todos", todoRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

async function main(): Promise<void> {
  const PORT: string | number = process.env.PORT || 3000;

  try {
    await connectToDatabase(process.env.DB_URI as string);
    app.listen(PORT, (): void => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(`Error! ${error}`);
  }
}

main();
