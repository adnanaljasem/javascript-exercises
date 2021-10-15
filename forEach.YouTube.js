const numbers = [1, 2, 3, 5, 6, 8];
numbers.forEach((item, index, arr) => {
  console.log("this index [" + index + "] =" + item);
});

// the callback function deco
// function consoleItems(item, index, arr) {
//   console.log("this index [" + index + "] =" + item);
// }
