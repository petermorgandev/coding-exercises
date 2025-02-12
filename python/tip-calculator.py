price = raw_input('What is the price you need to pay? ')
tax = raw_input('What percentage do you want to tip? ')
tax_percent = float(tax) * .01
final_cost = float(price) + (float(price) * tax_percent)
print "Price With Tip: " + str(final_cost)
