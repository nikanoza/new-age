import express from "express";

const userRouter = express.Router();

userRouter.put("/users/:userId");

export default userRouter;
