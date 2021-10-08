let num1 = prompt("please enter your first number");
while (isNaN(num1)) {
  alert("please enter a number");
  num1 = prompt("please enter your first number");
}
let num2 = prompt("please enter your second number");
while (isNaN(num2)) {
  alert("please enter a number");
  num2 = prompt("please enter your second number");
}

if (num1 - num2 > 0) {
  console.log(`the greater number of ${num1} and ${num2} is ${num1}`);
} else if (num1 === num2) {
  console.log(`the numbers that you provided are equal`);
} else {
  console.log(`the greater number of ${num1} and ${num2} is ${num2}`);
}
