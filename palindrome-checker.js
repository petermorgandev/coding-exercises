function palinCheck(x) {
  if (typeof x === "undefined" || x === null || x === "") {
    return "Sorry, but I need something to check. Please try again.";
  } else if (typeof x === "string") {
    x = x.toLowerCase();
  } else if (typeof x === "number" || typeof x === "boolean") {
    x = x.toString();
  }

  return x === x.split("").reverse().join("") ? `${x} is the same forwards and backwards.` : `${x} is not the same forwards and backwards.`;
}

palinCheck("Kayak");
