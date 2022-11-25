import { signUp } from "controllers";
import express from "express";

const authRouter = express.Router();

authRouter.post("/auth/sign-up", signUp);

export default authRouter;
