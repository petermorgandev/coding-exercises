<?php

function largerNumber($x, $y) {
  if ($x === $y) {
    return 'These numbers are the same.';
  } elseif ($x > $y) {
    return $x . ' is greater than ' . $y;
  } else {
    return $y . ' is greater than ' . $x;
  }
}

echo largerNumber(25, 10);

?>
