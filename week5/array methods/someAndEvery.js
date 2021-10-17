const items = [
  { name: "bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
// The Array.some() method checks if any of the elements in an array
// pass a test(true or false) (provided as a function).
const checkPrice = items.some((item) => {
  return item.price === 0;
});
console.log(checkPrice);

// The Array.every() method returns true if all elements in an array pass a test (provided as a function).

const checkEvery = items.every((item) => {
  return item.price <= 1000;
});
console.log(checkEvery);
