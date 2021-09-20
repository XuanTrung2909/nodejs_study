const express = require("express");
const { signIn } = require("../Controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/sign-in", signIn);

module.exports = {
    authRouter,
};
