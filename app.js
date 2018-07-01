let i, fb = [0, 1];

function displayValues(n) {
  if (n >= 50) {
    return 'Please pick a number lower than 50';
  } else if (n === 1) {
    return 0;
  } else {
    for (i = 2; i < n; i++) {
      fb[i] = fb[i - 1] + fb[i - 2];
    }
    return fb;
  }
}

displayValues(5);