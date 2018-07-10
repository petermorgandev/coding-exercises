largerNumber = (x, y) ->
  if typeof x != 'number' || typeof y != 'number'
     "Sorry, but this requires 2 numbers. Please try again.";
  else if x == y
     "These numbers are the same.";
  else if x > y
     "#{x} is greater than #{y}";
  else 
     "#{y} is greater than #{x}";


largerNumber(25, 10);
