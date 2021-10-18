const myPhoto = document.getElementById("dog-img");
const myButton = document.getElementById("btn");

//https://dog.ceo/api/breeds/image/random

myButton.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => (myPhoto.src = data.message))
    // .catch(() => {
    //     alert("error happened ";)
    })
});
