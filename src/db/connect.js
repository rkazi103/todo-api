const mongoose = require("mongoose");

const connectToDatabase = (url) =>
  mongoose
    .connect(url)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.error(`Error trying to connect to: ${err}`));

module.exports = connectToDatabase;
