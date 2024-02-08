import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Day_1, Day_3, Day_4 } from "./30_days";
import { createReadStream } from "fs";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const day = new Day_1();
// day.read_file_async(__dirname + "/../files/test.text");
// day.write_file_async(
//   __dirname + "/../files/output.text",
//   "\nHi from file.... again.."
// );
// day.executeCommand("ls -la");
// day.executeCommand('echo "Hello, Node.js!"');
// Error handling middleware
function errorHandler(err: any, req: Request, res: Response, next: any) {
  if (err.message === "Invalid positive integer") {
    res.status(400).json({ error: "Invalid positive integer provided" });
  } else {
    // Pass the error to the default Express error handler
    next(err);
  }
}
/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req: Request, res: Response, next: any) {
  // Your implementation here
  console.log(`Request URL: ${req.url}`);
  console.log(` ${Date.now()} - ${req.method} request received`);
}
/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req: Request, res: Response, next: any) {
  const num = req.query.number as string;

  if (!num || isNaN(parseInt(num)) || parseInt(num) <= 0) {
    // Trigger an error if "number" is not a positive integer
    next(new Error("Invalid positive integer"));
  } else {
    // Return a success message if "number" is a positive integer
    res.json({ message: "Success! Provided number is a positive integer." });
  }
}
// Register error handling middleware
app.use(errorHandler);
const day = new Day_4();
day.resolvePath(__dirname + "/Users/username/project/folder/file.txt");
app.use(requestLoggerMiddleware);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
const greetHandler = (req: Request, res: Response) => {
  res.send(`Hello ${req.query.name}!`);
};
app.get("/greet", greetHandler);
app.get("/positive", positiveIntegerHandler);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
