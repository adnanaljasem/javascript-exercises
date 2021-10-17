const items = [
  { name: "bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
// map creates a new array from the results of calling a function for every element.
// here i want to get the name of each item
const arrayNames = items.map((itemPara) => {
  return itemPara.name;
});
console.log(arrayNames);
