require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");

const app = express();

const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api/v1/users", userRouter);

mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(chalk.blue.underline("Your database has been connected"));
});

app.listen(3000, () => {
  console.log(chalk.magenta.bold("Your server is running at 3000 port"));
});
