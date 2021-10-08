const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
const port = process.env.PORT || 3000;

// database
require("./db/connections");

const marketRouter = require("./routes/market");
const taskRouter = require("./routes/tasks");
app.use('/', marketRouter);
app.use("/task",taskRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });