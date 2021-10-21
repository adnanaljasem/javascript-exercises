let toDoList = [];
let theButton = document.querySelector("[type=button]");
let textInput = document.querySelector("[type=text]");
let myContainer = document.getElementById("container");

theButton.addEventListener("click", function addToMyArrayAndShowToUser() {
  //get input from input field
  //add input to the array

  const inputItem = textInput.value;
  console.log(inputItem);
  if (inputItem != "") {
    toDoList.push(inputItem);
    console.log(toDoList);
  } else {
    return false;
  }
  //show the list to the user //create a <p> inside the container when you click the button

  let myParagraph = document.createElement("li");
  //the content of this li is the input value
  myParagraph.innerText = textInput.value;
  // append it! (who is the father:))
  myContainer.appendChild(myParagraph);
  //empty ipnut field after clicking butten:
  textInput.value = "";
  //change style of the <li> : cursor=> pointer
  myParagraph.style.cursor = "pointer";

  //add an event listner for <li> click => done / undone
  myParagraph.addEventListener("click", function () {
    const isDone = "  (is done)";
    if (myParagraph.innerHTML.includes(isDone)) {
      myParagraph.innerHTML = myParagraph.textContent.replace(isDone, "");
    } else {
      myParagraph.innerHTML = myParagraph.textContent + isDone;
    }
  });
  // add dblclick to remove the li
  myParagraph.addEventListener("dblclick", function () {
    myParagraph.remove();
  });
});
