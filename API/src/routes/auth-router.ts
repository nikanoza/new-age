import { authMe, SignIn, signUp } from "controllers";
import express from "express";
import { authMiddleware } from "middlewares";

const authRouter = express.Router();

authRouter.post("/auth/sign-up", signUp);
authRouter.post("/auth/sign-in", SignIn);
authRouter.get("/auth/me", authMiddleware, authMe);

export default authRouter;
