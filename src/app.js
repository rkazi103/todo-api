const express = require("express");
require("dotenv").config();
const todoRouter = require("./routes/todo");

const app = express();

// middleware + routers
app.use("/api/v1/todos", todoRouter);
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hi");
});

function main() {
  const PORT = process.env.PORT || 3000;

  try {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
}

main();
