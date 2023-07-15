const express = require('express');
const { registerNewUser, loginUser } = require("../controllers/userController");
const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post("/register", registerNewUser);
userRouter.post("/login", loginUser);

module.exports={
    userRouter
}