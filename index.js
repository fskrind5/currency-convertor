#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to the Currency Convertor by Falak Sher Khan \n"));
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        message: "Enter the currency you want to convert from:"
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        message: "Enter the currency you want to convert to:"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount:"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`The conveted amount is:${chalk.greenBright(convertedAmount.toFixed(2))}`);
