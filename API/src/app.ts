import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./config/mongo.js";
import bodyParser from "body-parser";

const app = express();

dotenv.config();
connectToMongo();

app.use(bodyParser.json());

app.listen(4000);
