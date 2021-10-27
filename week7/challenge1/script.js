const box = document.querySelector("button");
const text = document.querySelector("span");

box.addEventListener("focus", function () {
  text.textContent = "Type a number between 1 and 5";
});

box.addEventListener("focusout", function () {
  text.textContent = "Click here to give your rating";
});

// Write your code here 👇

box.addEventListener("keydown", function (evt) {
  console.log("keydown: " + evt.keyCode);
  if (evt.keyCode === 49) {
    text.textContent = "🤬";
  } else if (evt.keyCode === 50) {
    text.textContent = "☹️";
  } else if (evt.keyCode === 51) {
    text.textContent = "😐";
  } else if (evt.keyCode === 52) {
    text.textContent = "🙂";
  } else if (evt.keyCode === 53) {
    text.textContent = "😁";
  } else {
    text.textContent = "Type a number between 1 and 5";
  }
});
