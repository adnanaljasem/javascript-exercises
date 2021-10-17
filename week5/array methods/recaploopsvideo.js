const animalsComplex = [
  { name: "dog", age: 5 },
  { name: "cat", age: 3 },
];
animalsComplex
  .map((item) => item.name)
  .map((itemName) => itemName.toUpperCase())
  .forEach((nameUpper) => console.log(`I'm a ${nameUpper}`));
