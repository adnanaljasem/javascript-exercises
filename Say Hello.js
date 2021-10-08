let yourname = prompt("What's your name?");
const message = "Hello " + yourname;
// const message = `Hello         ${yourname}`;
console.log(message);

// if the user enter an empy string for 3 times, we just say goodbye

let yourname = prompt("What's your name?");
let attempt = 0;

while (yourname == "") {
  yourname = prompt("What's your name?");
}
const message = "Hello " + yourname;
// const message = `Hello         ${yourname}`;
console.log(message);

//
