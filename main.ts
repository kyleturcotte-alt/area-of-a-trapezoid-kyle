game.splash("Let's calculate the area and perimeter of a rectangle!")
let length = game.askForNumber("What is the length? (cm)")
let width = game.askForNumber("What is the width? (cm)")
let perimeter = 2 * (length + width)
let area = length * width
game.splash("The area of the trapezoid is", area)
