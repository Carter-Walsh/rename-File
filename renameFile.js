const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("What is your name?", function(answer) {
    console.log(`Hi, ${answer}!`);
});

reader.question("Enter a number to check if it is even or odd ", function(number) {
    if (number % 2 === 0) {
        console.log(`The number ${number} is even`);
    } else {
        console.log(`The number ${number} is odd`);
    }
});