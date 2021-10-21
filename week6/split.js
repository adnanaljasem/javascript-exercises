var myStr = `ABC
DE`;
// console.log(myStr);
var res = [];

// myStr.split("\n").forEach(function (v) {
//   v.split("").forEach(function (v1, i) {
//     res[i] = (res[i] || "") + v1;
//   });
// });

// console.log(res.join("\n"));

let newArr = myStr.split("\n"); // will split it into tow string in an array
console.log(newArr);
