import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import defaultRouter from "./routes/defaultRoutes.js";

/**
 * This file controls the express server and
 * lets the server use everything it needs to
 * in order to function.
 */

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use("/", defaultRouter);

export default app;
