checkLock = (a, b, c, d) ->
  wrong = "Sorry. That combination is not correct."
  if a != 3 and a != 5 and a != 7
    wrong
  else if b != 2
    wrong
  else if c < 5 or c > 100
   wrong
  else if d >= 9 and d <= 20
    wrong
  else
    return "You opened the lock."

checkLock(5, 2, 45, 1) # returns You opened the lock.
checkLock(1, 2, 45, 1) # returns Sorry. That combination is not correct.
checkLock(5, 2, 45, 10) # returns Sorry. That combination is not correct.
