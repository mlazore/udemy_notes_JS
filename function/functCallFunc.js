

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces =  cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

/*function inside of a function
 the console log is giving the paranmeter on line 7 the values of 2 apples and 3 oranges. 
 2.) We created another function on line 3 named cutFruit pieces with a return of its parameter fruit * 4. That total is then stores in the variables applePieces and orangePieces.
 3.) on lines 8-9 its taking the values of the apples and oranges then giving it to the parameter on line 3 to then be multiplied in the return statement.
 4.) after that on line 11 the variable juice has a string listing out what it wants to say which is Juice with 8 pieces of apples and 12 pieces of oranges. 
*/
