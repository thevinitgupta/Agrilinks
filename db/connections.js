const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Database connected at port : "+process.env.DB_URL);
  })
  .catch((err) => {
    console.log(err);
  });