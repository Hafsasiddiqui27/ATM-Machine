#! /usr/bin/env node

import inquirer from "inquirer";

// ********* ATM MACHINE **************

// 1. Enter your pin.
// 2. Choose the operations(Withdraw, FastCash, inquireBalance).
// 3. your remaning amount.

let user_Balance: number = 50000;
let user_Pin = 1010;

let user_Pin_Answer = await inquirer.prompt([
  {
    message: "enter your pin..",
    type: "number",
    name: "pin",
  },
]);
if (user_Pin_Answer.pin === user_Pin) {
  console.log("Correct PIN code!!!");

  let operation_Ans = await inquirer.prompt([
    {
      message: "select one",
      type: "list",
      name: "operation",
      choices: ["cashWithdraw", "fastCash", "checkBalance"],
    },
  ]);
  console.log(operation_Ans);

  if (operation_Ans.operation === "cashWithdraw") {
    console.log(`Enter amount you want to withdraw`);

    let amount_Ans = await inquirer.prompt([
      {
        message: "enter amount",
        type: "number",
        name: "amount",
      },
    ]);
    
    // if (user_Balance >= amount_Ans.amount) {
      if (amount_Ans.amount  <= user_Balance ) {
      user_Balance -= amount_Ans.amount;
      console.log(`Your balance is ${user_Balance}`);
    } else {
      console.log("You have insufficient balance..");
    }
  } else if (operation_Ans.operation === "fastCash") {
    let fastCash_Ans = await inquirer.prompt([
      {
        message: "select one",
        type: "list",
        name: "fastCash",
        choices: ["1000", "2000", "5000", "10000"],
      },
    ]);
    user_Balance -= fastCash_Ans.fastCash;
    console.log(`Your current balance is ${user_Balance}`);
  } else if (operation_Ans.operation === "checkBalance") {
    console.log(`Your current balance is ${user_Balance}`);
  }
} else {
  console.log(`You have entered a Incorrect PIN.`);
}
