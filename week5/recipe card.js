const recipe = {};

//add key value pairs to obj
recipe.title = "Soup";
recipe.Serves = 2;
recipe.Ingredients = ["carrot", "potato", "water", "salt"];
console.log(recipe.title);

// to key value pairs
let entries = Object.entries(recipe);
// to choose the second pair
console.log(entries[1]);
