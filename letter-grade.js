function letterGrade(n) {
  if (n <= 100 && n >= 90) {
    return "You got an A";
  } else if (n <= 89 && n >= 80) {
    return "You got a B";
  } else if (n <= 79 && n >= 70) {
    return "You got a C.";
  } else if (n <= 69 && n >= 60) {
    return "You got a D.";
  } else {
    return "You got an F.";
  }
}

letterGrade(97);
letterGrade(80);
letterGrade(71);
letterGrade(65);
letterGrade(20);
