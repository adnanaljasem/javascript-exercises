let age = prompt("please enter your age");
while (isNaN(age) || age > 120 || age <= 0 || age % 1 != 0) {
  alert("please enter a valid age");
  age = prompt("please enter your age");
}

let retirement = prompt("please enter your retirement age");

while (
  isNaN(retirement) ||
  retirement < age ||
  retirement > 120 ||
  retirement % 1 != 0
) {
  alert("please enter a valid retirement age");
  retirement = prompt("please enter your retirement age");
}
let yeartsToRetirement = retirement - age;
console.log(`You have ${yeartsToRetirement} years until you can retire`);

let currentYear = new Date().getFullYear();
let retireYear = currentYear + yeartsToRetirement;

console.log(`it's ${currentYear}, so you can retire in ${retireYear}`);
