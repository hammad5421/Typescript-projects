import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Enter the first number here?"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "Enter the second number here?"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Select the Operator here?"
    },
]);
const { numberone, numbertwo, operator } = answers;
let result = 0;
if (numberone && numbertwo && operator) {
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    if (operator === "-") {
        result = numberone - numbertwo;
    }
    if (operator === "*") {
        result = numberone * numbertwo;
    }
    if (operator === "/") {
        result = numberone / numbertwo;
    }
    console.log("Your Result is ", result);
}
else {
    console.log("ENter Valid Input");
}
