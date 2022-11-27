import { SignIn, signUp } from "controllers";
import express from "express";

const authRouter = express.Router();

authRouter.post("/auth/sign-up", signUp);
authRouter.post("/auth/sign-in", SignIn);

export default authRouter;
