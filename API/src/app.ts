import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectToMongo from "./config/mongo.js";

const app = express();

dotenv.config();
connectToMongo();

app.listen(4000);
