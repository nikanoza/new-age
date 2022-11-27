import { deleteUser, updateUser } from "controllers";
import express from "express";
import { authMiddleware } from "middlewares";

const userRouter = express.Router();

userRouter.put("/users/:userId", authMiddleware, updateUser);
userRouter.delete("/users/:userId", authMiddleware, deleteUser);

export default userRouter;
