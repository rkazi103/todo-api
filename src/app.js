const express = require("express");
require("dotenv").config();
const app = express();

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
