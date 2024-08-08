import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "./db/dbConnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

//middleware to connect to frontend..
app.use(
  cors({
    origin: [process.env.PORTFOLIO_URL, process.env.DASHBOAR_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

//cookie generator middleware..
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

dbConnection();

export default app;
