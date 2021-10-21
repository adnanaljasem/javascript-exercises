let htmlImg = document.getElementById("img");
let btn = document.getElementById("next");

//   https://dog.ceo/api/breeds/image/random

btn.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => (htmlImg.src = data.message));
});
