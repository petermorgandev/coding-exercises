_u = (y) -> 
  y.toLowerCase()

_t = (n, x) ->
  Math.floor(Math.random() * (Math.floor(x) - Math.ceil(n) + 1)) + n

_g = () -> 
  switch _t(0, 2)
    when 0 then "r"
    when 1 then "p"
    when 2 then "s"

_d = (w, c) -> 
  switch (w + c)
    when "b" + c then "SNEAKY SNEAKY!"
    when "rr", "pp", "ss" then "The match was a tie."
    when "rp", "ps", "sr" then "You let a computer beat you?"
    else "You beat the computer."

_p = (x) -> 
  _d(_u(x), _g())

console.log _p("s");
