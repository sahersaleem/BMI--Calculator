import inquirer from "inquirer";
async function bmiCalc() {
    console.log("Welcome to the BMI calculator app ! ");
    const answers = await inquirer.prompt([{
            type: "number",
            name: "height",
            message: "Please enter your height in feet : "
        },
        {
            type: "number",
            name: "weight",
            message: "Please enter your weight in kg  : "
        }
    ]);
    const { height, weight } = answers;
    const height1 = (answers.height * 0.3048) ** 2;
    let calcBmi = (weight / height1);
    let round = Math.floor(calcBmi);
    console.log(`Your BMI is ${round}`);
    if (calcBmi < 18.5) {
        console.log("you are weak");
    }
    else if (calcBmi > 18.5 && calcBmi < 25) {
        console.log("You are healthy!");
    }
    else if (calcBmi > 25 && calcBmi < 30) {
        console.log("You are overweight");
    }
    else {
        console.log("You are obese!");
    }
}
do {
    const wait = await bmiCalc();
    var again = await inquirer.prompt({
        type: "input",
        name: "again",
        message: "Do you want to continue press Y : "
    });
} while (again.again == "Y" || again.again == "Yes" || again.again == "yes" || again.again == "y" || again.again == "YES");
