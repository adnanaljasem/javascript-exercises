let number1 = Number(prompt("put your first positive number"));

while (number1 % 1 != 0 || number1 < 0) {
  alert("please enter a valid number");
  number1 = Number(prompt("put your first positive number"));
}

let number2 = Number(prompt("put your second positive number"));

while (number2 % 1 != 0 || number2 < 0) {
  alert("please enter a valid number");

  number2 = Number(prompt("put your second positive number"));
}

let GCD;
let reminder = number1 % number2;
const myNumber1WhichWillNeverChange = number1;
const myNumber2WhichWillNeverChange = number2;

while (reminder !== 0) {
  number1 = number2;
  number2 = reminder;

  reminder = number1 % number2;
}

GCD = number2;

alert(
  `the GCD for  ${myNumber1WhichWillNeverChange} and ${myNumber2WhichWillNeverChange} is ${GCD}`
);
