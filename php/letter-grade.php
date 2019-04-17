<?php

function letterGrade($n) {
  if ($n <= 100 and $n >= 90) {
    return 'You got an A. ';
  } elseif ($n <= 89 and $n >= 80) {
    return 'You got a B. ';
  } elseif ($n <= 79 and $n >= 70) {
    return 'You got a C. ';
  } elseif ($n <= 69 and $n >= 60) {
    return 'You got a D. ';
  } else {
    return 'You got an F. ';
  }
}

echo letterGrade(97);
echo letterGrade(80);
echo letterGrade(71);
echo letterGrade(65);
echo letterGrade(20);

?>
