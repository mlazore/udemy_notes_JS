//Helps bundle information a container that contains variables

const friend1 = "Mike";
const friend2 = "Mat";
const friend3 = "Pete";

//array of this
const friends = ["Mike", "Mat", "Pete"];
console.log(friends[0]);
console.log(friends[1]);


//array function
const years = new Array(1991, 1984, 2008, 2020);

const years = [1990, 1967, 2002, 2010, 2020];

//Add elemments
const friends = ["Mike", "Mat", "Pete"];
const newLength = friends.push("Zack");
console.log(friends);
console.log(newLength);

// adding zack into the friends array

friends.unshift("Mike");
console.log(friends);

//adds a name to the beginning of the array 

//Remove elements

friends.pop(); //removes last item of the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first name removed
console.log(friends);

console.log(friends.indexOf("Steven")); // Shows the index of the name chosen in the array  
//Same as indexOf
console.log(friends.includes("Bob"));

if(friends.includes("Peter")){
    console.log("You have a friend called Peter");
};



const callTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :bill * 0.2;
}

const bills = [125, 555, 44];
const tip = [calcTip(bills[0])] , calcTip(bills[1]),
calcTip(bills[2]);


// const calcTip = bill => bill 