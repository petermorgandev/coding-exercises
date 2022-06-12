<?php

function displayValues($n) {
  if ($n >= 50) {
    return 'Please pick a number lower than 50';
  } elseif ($n === 1) {
    return 0;
  } else {
    $fb = [0, 1];
    for ($i = 2; $i < $n; $i++) {
      $fb[$i] = $fb[$i - 1] + $fb[$i - 2];
    }
    return implode(' ', $fb);
  }
}

echo displayValues(15);

?>
