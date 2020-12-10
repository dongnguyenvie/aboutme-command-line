#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("inquirer");

clear();

console.log(
  chalk.yellow(figlet.textSync("Hi Bro", { horizontalLayout: "full" }))
);

const questions = [
  {
    type: "list",
    name: "isCheckbox",
    message: "is This checkbox CLI?",
    choices: [
      {
        name: "Yes, It is",
        value: "yes",
      },
      {
        name: "No, It isn't",
        value: "no",
      },
    ],
  },
  {
    type: "checkbox",
    name: "about",
    message: "What do you know Mr.Quỷnh ?",
    choices: [
      {
        name: "Handsome",
        value: "Handsome",
      },
      {
        name: "Young",
        value: "Young",
      },
    ],
  },
];
inquirer.prompt(questions).then((command) => {
  if (command.isCheckbox === "yes") {
    console.log(chalk.blue("Yes, It is simple checkbox"));
  } else {
    console.log(chalk.blue("Why isn't checkbox?"));
  }
  if (command.about.length) {
    console.log(
      chalk.red("Thank you for talking about me: ", ...command.about)
    );
  }

  console.log(
    chalk.green(
      "You can chat with him on " +
        chalk.blue.underline.bold("https://facebook.com/tony.quynh")
    )
  );
});
