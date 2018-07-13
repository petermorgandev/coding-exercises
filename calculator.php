<?php

function calc($x, $y, $z) {
  if ($x === 'add') {
    return $y + $z;
  } elseif ($x === 'subtract') {
    return $y - $z;
  } elseif ($x === 'multiply') {
    return $y * $z;
  } elseif ($x === 'divide') {
    return $y / $z;
  }
}

echo calc('add', 2, 3);
echo calc('subtract', 6, 3);
echo calc('multiply', 2, 3);
echo calc('divide', 10, 5);

?>
