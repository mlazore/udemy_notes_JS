const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

//Arrow function w/ only one parameter
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = alcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));



//function with multiple parameters
const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstname} is going to retire in ${retirement} years.`
}
console.log(yearsUntilRetirement(1991, `Martin`));

//solo attempt

const dayOfMonth = (day, hour) => {
    const day = "Monday";
    const hour = "1pm";
    return `Today is ${day} and the time is ${hour}`
}
console.log(dayOfMonth);