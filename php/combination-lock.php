<?php

function checkLock($a, $b, $c, $d) {
  $wrong = 'That combination is not correct. ';
  if ($a !== 3 and $a !== 5 and $a !== 7) {
    return $wrong;
  } elseif ($b !== 2) {
    return $wrong;
  } elseif ($c < 5 or $c > 100) {
    return $wrong;
  } elseif ($d >= 9 and $d <= 20) {
    return $wrong;
  } else {
    return 'You opened the lock. ';
  }
}

echo checkLock(5, 2, 45, 1); // returns 'You opened the lock.'
echo checkLock(1, 2, 45, 1); // returns 'That combination is not correct.'
echo checkLock(5, 2, 45, 10); // returns 'That combination is not correct.'

?>
