const express = require("express");
const filmRouter = require("./filmsRouter");
const userRouter = require("./usersRouter");

const apiRouter = express.Router();

apiRouter.use("/films", filmRouter);

apiRouter.get("/", (req, res, next) => {
  res.send("api router working");
});

module.exports = apiRouter;
