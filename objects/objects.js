const jonas = {  //everything inside jonas are properties
    firstname: "Joans",
    lastname: "Schmedtmann",
    age: 2037 - 1991,
    friends: ["Michael", "Peter", "Steven"] 
};

console.log(jonas.lastname) //grabs the last name from the object 
console.log(jonas["lastname"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);