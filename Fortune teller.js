let numberOfChildern = prompt("what is the number of Childern");
while (numberOfChildern < 0 || isNaN(numberOfChildern)) {
  alert(
    "please enter a number of the childern (positive and equal or more then 0)"
  );
  numberOfChildern = prompt("what is the number of Childern");
}

let partnerName = prompt("what is your partners name?");
let geographicLocation = prompt("What's your country?");
let jobTitle = prompt("What's your job?");

const yourFurtune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildern} kid(s)`;

alert(yourFurtune);
