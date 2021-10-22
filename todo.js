let toDoList = [];
let theButton = document.querySelector("[type=button]");
let textInput = document.querySelector("[type=text]");
let myContainer = document.getElementById("container");

theButton.addEventListener("click", addToMyArrayAndShowToUser);

function addToMyArrayAndShowToUser() {
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

  let myLi = document.createElement("li");
  //the content of this li is the input value
  myLi.innerText = textInput.value;
  // append it! (who is the father:))
  myContainer.appendChild(myLi);
  //empty ipnut field after clicking butten:
  textInput.value = "";
  //change style of the <li> : cursor=> pointer
  myLi.style.cursor = "pointer";

  //add an event listner for <li> click => done / undone
  myLi.addEventListener("click", function () {
    const isDone = "  (is done)";
    if (myLi.innerHTML.includes(isDone)) {
      myLi.innerHTML = myLi.textContent.replace(isDone, "");
    } else {
      myLi.innerHTML = myLi.textContent + isDone;
    }
  });
  // add dblclick to remove the li
  myLi.addEventListener("dblclick", function () {
    myLi.remove();
  });
}

// do the same when you press enter
textInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    //checks whether the pressed key is "Enter"
    addToMyArrayAndShowToUser();
  }
});
