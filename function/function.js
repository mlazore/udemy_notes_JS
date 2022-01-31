function logger() {
    console.log(`My name is Martin`);
}
// calling //running //invoking // using the function
logger(); 

//can recieve and return data back


//parameters () are like variables specific only to this function
function fruitProcessor(apples, oranges){
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // apples become 5 and oranges become 0 "argument" on line 11
console.log(appleJuice);

const appleOrangeJuice = (2, 4);
console.log(appleOrangeJuice);

//create function line 11
// create your variable string that you want to present the message line 12
// return the variable that you made on line 12
// call the function line 16, (const appleJuice = "fruitProcessor") we created another variable to call it in
//console.log the called function