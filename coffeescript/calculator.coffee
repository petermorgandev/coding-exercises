calculator = (x, y, z) ->
  switch x
    when "add" then y + z
    when "subtract" then y - z
    when "multiply" then y * z
    when "divide" then y / z
    else "We need some data."

console.log(calculator("add", 2, 3))
console.log(calculator("subtract", 6, 3))
console.log(calculator("multiply", 2, 3))
console.log(calculator("divide", 10, 5))