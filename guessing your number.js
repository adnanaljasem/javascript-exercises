let minNumber = 1;
let maxNumber = 100;

let foundNumber = maxNumber - minNumber <= 1;
while (!foundNumber) {
  let middle = Math.floor((maxNumber + minNumber) / 2);
  let answer = prompt(`Is your number grater than ${middle}? Y or N`);

  if (answer.toLowerCase() === "y") {
    minNumber = middle;
  } else {
    maxNumber = middle;
  }
  foundNumber = maxNumber - minNumber <= 1;
}

console.log(`Your number is ${maxNumber}`);
