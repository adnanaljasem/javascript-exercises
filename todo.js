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

  let myParagraph = document.createElement("p");
  //the content of this p is the input value
  myParagraph.innerText = textInput.value;
  // append it!
  myContainer.appendChild(myParagraph);
  //empty ipnut field after clicking butten:
  textInput.value = "";
  //change style of the <p> : cursor=> pointer
  myParagraph.style.cursor = "pointer";
  //add event listner for <p> click => done
  myParagraph.addEventListener("click", function () {
    const isDone = "  (is done)";
    if (myParagraph.innerHTML.includes(isDone)) {
      myParagraph.innerHTML = myParagraph.textContent.replace(isDone, "");
    } else {
      myParagraph.innerHTML = myParagraph.textContent + isDone;
    }
  });

  myParagraph.addEventListener("dblclick", function () {
    myParagraph.remove();
  });
});
