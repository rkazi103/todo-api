const express = require("express");
const connectToDatabase = require("./db/connect");
require("dotenv").config();
const todoRouter = require("./routes/todo");

const app = express();

// middleware + routers
app.use("/api/v1/todos", todoRouter);
app.use(express.json());

async function main() {
  const PORT = process.env.PORT || 3000;

  try {
    await connectToDatabase(process.env.DB_URI);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
}

main();
