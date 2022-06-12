<?php

function area_of_circle($r) {
  $solution = M_PI * pow($r, 2);
  return round($solution, 2);
}

echo area(2);

?>
