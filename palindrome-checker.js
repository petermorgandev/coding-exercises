function palinCheck(x) {
  let y;

  if (typeof x === 'undefined' || typeof x === null || typeof x === '') {
    return 'Sorry, but I need something to check. Please try again.';
  } else if (typeof x === 'string') {
    y = x.toLowerCase();
  } else if (typeof x === 'number' || typeof x === 'boolean') {
    y = x.toString();
  }

  let reversed = y.split('').reverse().join('');

  if (y === reversed) {
    return `${x} is the same forwards and backwards.`;
  } else {
    return `${x} is not the same as ${reversed}.`;
  }
}

palinCheck('Kayak');
