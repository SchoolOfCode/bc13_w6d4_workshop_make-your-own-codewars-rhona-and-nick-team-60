/* 
👉 Write your kata here!
You've just bought a new house and the bathroom needs renovating urgently. You need to tile one wall completely (floor to ceiling and side to side). You are on a budget and can only afford to buy exactly the right amount of tiles. How many do you need?
x = length of wall
y = height of wall
a = length of tile
b = height of tile
For anyone that has done some tiling, don't worry about grout joints in your calculation!
Remember walls and tiles will all be greater than zero in any given dimension. If any dimension is zero or negative return there has been a measurement error, so you should return null.
*/
//👉 Write the function your CodeWarriors will start with below here:
export function howManyTiles ([x,y,a,b]) {
    let wall = x*y
    let tile = a*b
    let total = wall/tile
    numberOfTiles = Math.ceil(total)
    return numberOfTiles
    }

