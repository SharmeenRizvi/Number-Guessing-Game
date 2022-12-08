#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let randomNum = Math.floor(Math.random() * 10);
const guessNumFunc = async () => {
  for (let i = 0; i < 4; i++) {
    let guessNum: { num: number } = await inquirer.prompt([
      {
        name: "num",
        type: "number",
        message: "Guess the number",
      },
    ]);
    if (guessNum.num === randomNum) {
      console.log(chalk.bgMagenta("You guessed it!"));
      break;
    } else {
      console.log(chalk.bgRed("Try Again"));
    }
  }
  console.log(chalk.bgBlue("The number was '" + randomNum + "'"));
};
guessNumFunc();
