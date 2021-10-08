let number = Number(prompt("please enter a number between 0 and 10"));

while (number < 0 || number > 10 || !Number.isInteger(number)) {
  alert("please enter a number between 0 and 10");
  number = Number(prompt("please enter a number between 0 and 10"));
}

let result = number * 9;
alert(`${number} * 9 =${result}`);
