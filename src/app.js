import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import configRoutes from "./routes/index.js";
import { connectMongoDB } from "./config/mongoConnect.js";

const app = express();
dotenv.config();

const port = process.env.PORT;
const mongoURL = process.env.MONGODB_URL;
connectMongoDB(mongoURL);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
