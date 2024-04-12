#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome to the Currency Convertor by Falak Sher Khan \n"));

const currency: any = {
    USD : 1,     //* American Dollar - Base Currency 
    EUR : 0.93,  //* Euro
    GBP : 0.80,  //* British Pound
    CAD : 1.37,  //* Canadian Dollar
    AED : 3.67,  //* Emirati Dirham
    TRY : 32.32, //* Turkish Lira
    SAR : 3.75,  //* Saudi Arabian Riyal
    INR : 74.57, //* Indian Rupee
    PKR : 278.05, //* Pakistani Rupee
    JPY : 153.34  //* Japenese Yen
}

let userAnswer = await inquirer.prompt([
    {
        name : "from",
        type :"list",
        choices : ["USD", "EUR", "GBP", "CAD", "AED", "TRY", "SAR", "JPY", "INR", "PKR"],
        message : "Enter the currency you want to convert from:"
    },
    {
        name : "to",
        type :"list",
        choices : ["USD", "EUR", "GBP", "CAD", "AED", "TRY", "SAR", "JPY", "INR", "PKR"],
        message : "Enter the currency you want to convert to:"
    },
    {
        name : "amount",
        type :"number",
        message : "Enter your amount:"
    }
]);

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount

let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log (`The conveted amount is: ${chalk.greenBright(convertedAmount.toFixed(2))}`);