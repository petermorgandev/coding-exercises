<?php

$arr1 = array(2, 9, 4, 8, 7, 6, 2, 4, 3, 2, 10, 22, 102, 13, 12, 2048);

function _x($y) {
  $newArr = array();
  for ($i = 0; $i < count($y); $i++) {
    if ($i !== 0 and $y[$i] % 2 === 0 and $y[$i - 1] % 2 === 0) {
      $newArr[] = '-' . $y[$i];
    } else {
      $newArr[] = $y[$i];
    }
  }
  return implode('', $newArr);
}

echo _x($arr1);

?>
