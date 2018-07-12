function anagram(x, y) {
  let o = x.replace(/\s+/g, "").toLowerCase().split("").sort().join();
  let p = y.replace(/\s+/g, "").toLowerCase().split("").sort().join();

  console.log(o === p);
}

anagram("rail Safety", "fairy tales");
