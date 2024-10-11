import express from "express";
import productTranscation from "./routes/productTranscation.route.js";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productTranscation);


export default app;
