let number = Number(prompt("please enter a number between 0 - 20"));

while (number > 20 || number < 0 || number % 1 != 0 || isNaN(number)) {
  number = prompt("please enter a number between 0 - 20");
}
if (number % 2 === 0) {
  alert(`${number} is even`);
} else {
  alert(`${number} is odd`);
}
