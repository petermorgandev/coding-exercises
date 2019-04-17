function largerNumber(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'Sorry, but this requires 2 numbers. Please try again.';
  } else if (x === y) {
    return 'These numbers are the same.';
  } else if (x > y) {
    return `${x} is greater than ${y}`;
  } else {
    return `${y} is greater than ${x}`;
  }
}

largerNumber(25, 10);
