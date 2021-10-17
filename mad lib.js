let noun = prompt("please enter a noun");
// while (typeof noun != String) {
//   alert("please enter a noun");
//   noun = prompt("please enter a noun");
// }
let verb = prompt("please enter a verb");
let adverb = prompt("please enter an adverb");
let adjective = prompt("please enter an adjective");

alert(`Hello ${noun} it seems like you like to ${verb} things ${adverb}
esspetially when they are ${adjective} things `);

// add input to an array
let myArray = [];
function addInputToArray() {
  myArray.push(`${noun}`, `${verb}`, `${adverb}`, `${adjective}`);
}
addInputToArray();
console.log(myArray);

//add input to an object
let myObject = {};
myObject["noun"] = `${noun}`;
myObject["verb"] = `${verb}`;
myObject["adverb"] = `${adverb}`;
myObject["ajective"] = `${adjective}`;

console.log(myObject);
