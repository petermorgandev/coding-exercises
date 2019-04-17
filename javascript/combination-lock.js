function checkLock(a, b, c, d) {
  let wrong = "Sorry. That combination is not correct.";
  if (a !== 3 && a !== 5 && a !== 7) {
    return wrong;
  } else if (b !== 2) {
    return wrong;
  } else if (c < 5 || c > 100) {
    return wrong;
  } else if (d >= 9 && d <= 20) {
    return wrong;
  } else {
    return "You opened the lock.";
  }
}

checkLock(5, 2, 45, 1); // returns 'You opened the lock.'
checkLock(1, 2, 45, 1); // returns 'Sorry. That combination is not correct.'
checkLock(5, 2, 45, 10); // returns 'Sorry. That combination is not correct.'
