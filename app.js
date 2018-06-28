let fb = [0, 1],
  i;

function displayValues(n) {
  if (n === 1) {
    return 0;
  } else {
    for (i = 2; i < n; i++) {
      fb[i] = fb[i - 1] + fb[i - 2];
    }
    return fb;
  }
}

displayValues(5);