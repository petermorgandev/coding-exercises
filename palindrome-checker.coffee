palinCheck = (x) ->
  if typeof x == 'undefined' || x == null || x == ''
    "Sorry, but I need something to check. Please try again."
  else if typeof x == 'string'
    y = x.toLowerCase()
  else if typeof x == 'number' || typeof x == 'boolean'
    y = x.toString()

  if y == y.split('').reverse().join('')
    "#{x} is the same forwards and backwards."
  else 
    "#{x} is not the same forwards and backwards."
  
palinCheck('Kayak')
