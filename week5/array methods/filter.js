const items = [
  { name: "bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
//filter method
//filer items less thatn 100

const cheapItems = items.filter(function cheapoo(cheapPara) {
  return cheapPara.price <= 100;
  //OR items.filter ((cheap) => { return cheap.price <= 100})
  //return true of false for each item, when it's true it will be in the new array
});
console.log(cheapItems);
