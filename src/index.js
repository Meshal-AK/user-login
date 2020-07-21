const express = require("express");
const ObjectId = require("mongodb");
const userRouter = require("./router/user");
const taskRouter = require("./router/task");
require("../src/db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json(), userRouter, taskRouter);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

//////////////////////////////////////////////

const jwt = require("jsonwebtoken");
