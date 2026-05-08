game.splash("Let's calculate the cost of a pizza!")
Labour_cost = 0.75
Rent_cost = 1
Pizza_diameter = game.ask_for_number("What is the diameter for your pizza? (in)")
Materials_cost = 0.5 * Pizza_diameter
Subtotal = Labour_cost + (Rent_cost + Materials_cost)
HST = 0.13
Tax = Subtotal * HST
Total = Subtotal + Tax
game.splash("The cost of your pizza is", Total)