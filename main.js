/* 
👉 Write your kata here!
You've just bought a new house and the bathroom needs renovating urgently. You need to tile one wall completely (floor to ceiling and side to side). You are on a budget and can only afford to buy exactly the right amount of tiles. How many do you need?
x = length of wall
y = height of wall
a = length of tile
b = height of tile
Walls and tiles should always be greater than zero in any given dimension - if any dimension is zero or a negative number, there must have been a measurement error, so return null.
You should return a whole number of tiles with no decimal point.
For anyone that has done some real life tiling, don't worry about grout joints in your calculation!
*/
//👉 Write the function your CodeWarriors will start with below here:
export function howManyTiles ([x,y,a,b]) {
    let input = [x,y,a,b]
    let filter = input.filter(x => x <= 0)
    if (filter.length !== 0) {
        return null
    }
    let wall = x*y
    let tile = a*b
    let total = wall/tile
    let numberOfTiles = Math.ceil(total)
    return numberOfTiles
    }

console.log(`Test: ${howManyTiles([3,1.5,3,0.2])}`)