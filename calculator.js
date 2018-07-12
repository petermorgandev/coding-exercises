function calculator(x, y, z) {
  switch (x) {
    case "add":
      return y + z;
    case "subtract":
      return y - z;
    case "multiply":
      return y * z;
    case "divide":
      return y / z;
    default:
      return "We need some data.";
  }
}

console.log(calculator("add", 2, 3));
console.log(calculator("subtract", 6, 3));
console.log(calculator("multiply", 2, 3));
console.log(calculator("divide", 10, 2));
