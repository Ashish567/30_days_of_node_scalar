import chalk from "chalk";
import path from "path";

class Day_4 {
  constructor() {
    console.log(
      chalk.yellowBright("Server running directory -> ") +
        chalk.bgGreen(process.cwd()) +
        "\n"
    );
    console.log(chalk.blue("Hello") + " Day " + chalk.red("4 !"));
  }
  async resolvePath(relativePath: string) {
    // Implementation
    try {
      const rel_path = path.resolve(relativePath);
      console.log(`Resolved Path: ${rel_path}`);
    } catch (error: any) {
      console.error(`Error resolving path: ${error.message}`);
    }
  }
}
export default Day_4;
