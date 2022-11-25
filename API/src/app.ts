import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongo from "./config/mongo.js";
import bodyParser from "body-parser";
import { authRouter } from "routes";
import { swaggerMiddleware } from "middlewares";

const app = express();

dotenv.config();
connectToMongo();

app.use(bodyParser.json());
app.use("/api", cors(), authRouter);
app.use("/", ...swaggerMiddleware);

app.listen(4000);
