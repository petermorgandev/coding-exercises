<?php

function findHypotenuse($x, $y) {
  return round(sqrt(($x * $x) + ($y * $y)), 2);
}

echo findHypotenuse(4, 2);

?>
