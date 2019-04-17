letterGrade = (n) ->
  if n <= 100 and n >= 90
    "You got an A."
  else if n <= 89 and n >= 80
    "You got a B."
  else if n <= 79 and n >= 70
    "You got a C."
  else if n <= 69 and n >= 60
    "You got a D."
  else
    "You got an F."
  
letterGrade(97);
letterGrade(80);
letterGrade(71);
letterGrade(65);
letterGrade(20);
