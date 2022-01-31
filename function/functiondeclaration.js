//function delcaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1); 

//function expression
// call it the same way capture the retun value and the result are the same

const calcAge2 = function (birthYear) { 
    return 2037 - birthYear;
}
const age2 = calcAge2(1992);
console.log(age1, age2);

// main difference is in function declarations can be called before defined in the code. Function expression cannot do the same. 
//Below is the same as the first function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
console.log(age1); 