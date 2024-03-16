import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Select any one of the operators to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
if (answer.operators === "Addition") {
    console.log("Your answer is :", answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "Substraction") {
    console.log("Your answer is :", answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "Multiplication") {
    console.log("Your answer is :", answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "Division") {
    console.log("Your answer is :", answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please choose any operator");
};
