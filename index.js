const readline = require('readline-sync');
const calc = require('./calculator');

console.log('Welcome to the calculator!');

console.log('Enter the operator:');
const operator = readline.prompt();

console.log(`How many numbers do you want to ${operator} ?`);
const c = parseInt(readline.prompt());

const calculator = calc.create_calculator(operator);

for (var i = 0; i < c; i++) {
  console.log('Enter a number:');
  const n = parseInt(readline.prompt());
  calculator.add_number(n);
}

console.log('The answer is: ' + calculator.calculate());
