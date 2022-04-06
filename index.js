const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require("dotenv").config({ path: ".env" });
const db = require("./config/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // backend
app.use("/", routes());

db.sync()
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

// Server and port
const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});