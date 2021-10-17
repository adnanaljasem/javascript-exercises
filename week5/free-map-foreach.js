// // foreach() and map()
// newArr = [1, 2, 3, 6, 9].forEach(logArray);
// function logArray(element, index, array) {
//   console.log("array index = " + [index] + " and element = " + element);
// }
let numArr = [1, 2, 3, 5, 6, 7, 8];
numArr.map(doubleeven);
function doubleeven() {
  if (numArr.element % 2 === 0) {
    return numArr.element * 2;
  }
}
