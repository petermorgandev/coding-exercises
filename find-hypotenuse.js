function findHypotenuse(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'Sorry, but this requires 2 numbers. Please try again.';
  } else {
    return Math.sqrt((x * x) + (y * y)).toFixed(2);
  }
}

findHypotenuse(4, 2);
