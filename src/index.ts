import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Day_1, Day_3, Day_4 } from "./30_days";
import { createReadStream } from "fs";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// const day = new Day_1();
// day.read_file_async(__dirname + "/../files/test.text");
// day.write_file_async(
//   __dirname + "/../files/output.text",
//   "\nHi from file.... again.."
// );
// day.executeCommand("ls -la");
// day.executeCommand('echo "Hello, Node.js!"');
const day = new Day_4();
day.resolvePath(__dirname + "/Users/username/project/folder/file.txt");

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
