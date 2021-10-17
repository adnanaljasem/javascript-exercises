let toDoList = [];
let myButton = document.querySelector("[type=button]");
let userInput = document.querySelector("[type=text]");
function addItemToList(item) {
  toDoList.push(item);
}

myButton.addEventListener("click", addInputToArray);
function addInputToArray() {
  // get the input from input filed
  const inputItem = userInput.value;
  console.log(inputItem);
  // add input to to do list arry
  addItemToList(inputItem);
  // show the list to the user
  showListToTheUser();
}
function showListToTheUser() {
  var listItemsForUser = document.querySelector("ul");
  listItemsForUser.innerHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    const liElemnt = document.createElement("li");
    const toDoItem = document.createTextNode(toDoList[i]);
    liElemnt.appendChild(toDoItem);
    listItemsForUser.appendChild(liElemnt);
  }
}

console.log("***" + myButton);
