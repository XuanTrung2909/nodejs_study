const express = require("express");
const { authRouter } = require("./auth.router");
const { userRouter } = require("./UserRouter");

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);

module.exports = {
    rootRouter,
};
