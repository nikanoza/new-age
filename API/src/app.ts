import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongo from "./config/mongo.js";
import bodyParser from "body-parser";
import authRouter from "routes/auth-router.js";

const app = express();

dotenv.config();
connectToMongo();

app.use(bodyParser.json());
app.use("/api", cors(), authRouter);

app.listen(4000);
