const express = require("express");
const { authRouter } = require("./auth.router");
const { ticketRouter } = require("./ticket.router");
const { userRouter } = require("./UserRouter");

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/ticket", ticketRouter);

module.exports = {
    rootRouter,
};
