let myImgs = [
  { src: "img/art1.jpg", alttext: "img1" },
  { src: "img/art2.jpg", alttext: "img2" },
  { src: "img/art3.jpg", alttext: "img3" },
  { src: "img/art4.jpg", alttext: "img4" },
];
const htmlImage = document.getElementById("slider");
const next = document.getElementById("next");
const pre = document.getElementById("pre");

const firstImg = myImgs[0];

// take src (and alltext) propety from firstImag and store it as a new variable source
const { src, alttext } = firstImg;
// easier alternative to above:
// const src = firstImage.src;
// const altText = firstImage.altText;

htmlImage.src = myImgs[0].src;
htmlImage.alt = myImgs[0].alttext;
let counter = 0;

next.addEventListener("click", function () {
  counter++;
  if (counter > myImgs.length - 1) {
    counter = 0;
  }

  htmlImage.src = myImgs[counter].src;
});
