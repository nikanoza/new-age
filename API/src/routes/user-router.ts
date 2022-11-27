import { updateUser } from "controllers";
import express from "express";
import { authMiddleware } from "middlewares";

const userRouter = express.Router();

userRouter.put("/users/:userId", authMiddleware, updateUser);

export default userRouter;
