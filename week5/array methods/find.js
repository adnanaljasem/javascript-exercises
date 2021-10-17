const items = [
  { name: "bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
//find method returns the value of the *first* element in an array that passes a test (provided by a function).
const foundItem = items.find((item) => {
  return item.price < 200;
});
console.log(foundItem);
