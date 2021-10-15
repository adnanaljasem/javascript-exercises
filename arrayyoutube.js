const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
// ];
// // filter method
// const filteredItems = items.filter((item) => {
//   // ture of false statement to weather or not we want to inculde the item
//   return item.price <= 100;
// });
// console.log(filteredItems);

function filteredItems2(item) {
  if (items.price <= 100) {
    return items.price();
  }
}
