import chalk from "chalk";
import { FileHandle, readFile } from "fs/promises";
import path from "path";
class Day_1 {
  constructor() {
    console.log(
      chalk.yellowBright("Server running directory -> ") +
        chalk.bgGreen(process.cwd()) +
        "\n"
    );
    console.log(chalk.blue("Hello") + " Day " + chalk.red("1 !"));
  }

  async read_file_async(fs_path: string) {
    try {
      const file_path = path.resolve(fs_path);
      const fileContent = await readFile(file_path, "utf-8");
      console.log(chalk.whiteBright(fileContent));
    } catch (error: any) {
      console.error(
        chalk.bgRedBright(`Error reading the file: ${error.message}`)
      );
    }
  }
}
export default Day_1;
