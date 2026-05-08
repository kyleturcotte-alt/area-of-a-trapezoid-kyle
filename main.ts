game.splash("Let's calculate the cost of a pizza!")
let Labour_cost = 0.75
let Rent_cost = 1
let Pizza_diameter = game.askForNumber("What is the diameter for your pizza? (in)")
let Materials_cost = 0.5 * Pizza_diameter
let Subtotal = Labour_cost + (Rent_cost + Materials_cost)
let HST = 0.13
let Tax = Subtotal * HST
let Total = Subtotal + Tax
game.splash("The cost of your pizza is", Math.round(Total * 100) / 100)
