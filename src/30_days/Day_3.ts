import chalk from "chalk";
import { spawn } from "child_process";

class Day_3 {
  constructor() {
    console.log(
      chalk.yellowBright("Server running directory -> ") +
        chalk.bgGreen(process.cwd()) +
        "\n"
    );
    console.log(chalk.blue("Hello") + " Day " + chalk.red("3 !"));
  }
  async executeCommand(command: String) {
    try {
      const [comm, ...args] = command?.trim()?.split(" ");
      const comm_res = spawn(comm, [...args]);

      comm_res.stdout.on("data", this.handleOutput("stdout"));
      comm_res.stderr.on("data", this.handleOutput("stderr"));

      const code = await new Promise((resolve, reject) => {
        comm_res.on("exit", (code) => resolve(code));
        comm_res.on("error", (err) => reject(err));
      });

      console.log(chalk.magentaBright(`Process ended with ${code}`));
    } catch (error: any) {
      console.error(`Error executing command: ${error.message}`);
    }
  }

  handleOutput(stream: any) {
    return (data: any) => {
      console.log(chalk.blackBright(`${stream}:\n${data}`));
    };
  }
}
export default Day_3;
