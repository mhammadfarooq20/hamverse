#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = await chalkAnimation.rainbow("Lets Start Calculation "); //start
    await sleep();
    rainbowTitle.stop(); //stop after 2 sec
    console.log(chalk.blue(`___________________________
| |_____________________| |
| |JO.                0.| |
| |_____________________| |
|  ____ ____ ____   ____  |
| | 7  | 8  | 9  | | +  | |
| |____|____|____| |____| |
| | 4  | 5  | 6  | | -  | |
| |____|____|____| |____| |
| | 1  | 2  | 3  | | x  | |
| |____|____|____| |____| |
| | .  | 0  | =  | |    | |
| |____|____|____| |____| |
|_________________________|`));
}
await welcome();
async function askQuestion() {
    const answers = await inquirer.prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: [
                "+ Addition",
                "- Subtraction",
                "* Multiplication",
                "/ Division",
                "^ Power",
                "** Exponent",
            ],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1:",
            validate: (input) => {
                if (isNaN(input)) {
                    return "Please enter a valid number";
                }
                return true;
            },
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number 2:",
            validate: (input) => {
                if (isNaN(input)) {
                    return "Please enter a valid number";
                }
                return true;
            },
        },
    ]);
    if (answers.operator == "+ Addition") {
        console.log(chalk.cyanBright(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "- Subtraction") {
        console.log(chalk.redBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "* Multiplication") {
        console.log(chalk.yellowBright(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "/ Division") {
        console.log(chalk.magentaBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    else if (answers.operator == "^ Power") {
        console.log(chalk.yellowBright(`${answers.num1} ^ ${answers.num2} = ${answers.num1 ^ answers.num2}`));
    }
    else if (answers.operator == "** Exponent") {
        console.log(chalk.blackBright(`${answers.num1} ** ${answers.num2} = ${answers.num1 ** answers.num2}`));
    }
}
async function startAgain() {
    let again;
    let validAnswer = false;
    do {
        await askQuestion();
        again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press y or n:",
        });
        if (["y", "Y", "yes", "Yes", "YEs", "YES", "yES", "yEs", "YeS", "yeS"].includes(again.restart)) {
            validAnswer = false;
        }
        else if (["n", "N", "no", "No", "NO", "nO"].includes(again.restart)) {
            validAnswer = true;
        }
        else {
            console.log("Invalid input. Please enter only y or n.");
        }
    } while (!validAnswer);
}
startAgain();
