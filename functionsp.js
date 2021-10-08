const greet = function (
  name = "default value is Adnan",
  time = " default value is Morning"
) {
  console.log(`Hello ${name} in the ${time}`);
};
greet();
greet("Ahmad", "Afternoon");
