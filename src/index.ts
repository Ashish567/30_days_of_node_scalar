import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Day_1 } from "./30_days";
import { createReadStream } from "fs";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const day = new Day_1();
day.read_file_async(__dirname + "/../files/test.text");
day.write_file_async(__dirname + "/../files/output.text", "\nHi from file....");

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
