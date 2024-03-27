import inquirer from "inquirer";

// ********* ATM MACHINE **************

// 1. Enter your pin.
// 2. Choose the operations(Withdraw, FastCash, inquireBalance).
// 3. your remaning amount.

let user_Balance: number = 50000;
let user_Pin: number = 1234;

let user_Answer = await inquirer.prompt([
  {
    message: "enter your pin..",
    type: "number",
    name: "userPin",
  }
]);
if (user_Pin === user_Answer.userPin) {
  console.log(`Choose the following operations`);

  let operation_Ans = await inquirer.prompt([{
    message:"select one",
    type:"list",
    name:"operations",
    choices:["cashWithdraw", "fastCash", "checkBalance"]
  }]);
  console.log(operation_Ans);
//   if(operation_Ans === "cashWithdraw"){
//     let amount_Ans = await inquirer.prompt([{
//        message:"enter amount", 
//        type:"number",
//        name:"amount",}])
//    } else if (operation_Ans === operation_Ans.fastCash){
//     let fastCash_Ans = await inquirer.prompt([{
//         message:"enter amount", 
//         type:"list",
//         name:"fastCash",
//         choices:["1000", "2000", "5000", "10000"],}])
   }
else {
  console.log(`You have entered a Incorrect PIN.`);
}
