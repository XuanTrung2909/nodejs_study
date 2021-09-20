const express = require("express");
const {
    createUser,
    findAll,
    findUserDetail,
    deleteUser,
    updateUser,
    uploadAvatar,
} = require("../Controllers/UserController");
const {
    authenticate,
    authorize,
} = require("../middlewares/auth/verify-token.middleware");
const { logUser } = require("../middlewares/logs/logs.user.middleware");
const {
    checkExit,
} = require("../middlewares/validations/check-exit.middleware");
const { users } = require("../models");
const userRouter = express.Router();

userRouter.post(
    "/",
    (req, res, next) => {
        console.log("day la tinh nang lay danh sach nguoi dung");
        //cho chay toi cac middleware hoac controller tiep theo
        next();
    },
    createUser
);
userRouter.get("/", logUser, findAll);
userRouter.get("/:id", findUserDetail);
userRouter.delete("/:id", checkExit(users), deleteUser);
userRouter.put("/:id", updateUser);

userRouter.post(
    "/upload-avatar",
    authenticate,
    authorize(["ADMIN", "SUPER_ADMIN"]),
    uploadAvatar
);

module.exports = {
    userRouter,
};
