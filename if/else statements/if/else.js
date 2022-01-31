const day = "monday";

switch(day){
    case `monday`: // day === monday
        console.log("Today I have class");
        console.log("after class I study");
        break;
    case `tuesday`:
        console.log(`I drove to the mountains`);
        console.log(`I had a picnic`);
        break;
        case `wednesday`:
        case `thursday`:
        console.log("workout and cook")
        break;
        default:
            console.log("I didnt record the other days");
}

//break is to break up the lines of code to run on whichever day is called, monday will run lines 5-6 and note tuesdays console.logs

//case is like else/if statements. 
//swith is to compare to multiple options which are the days 
//for switch you use the name of the variable in this case on line 1 its const day so in the switch() <= you put whatever the name of the variable in the parenthesis

//in else/if statement

if (day === "monday") {
    console.log("Today I have class");
    console.log("after class I study");
}else if (day === "tuesday"){
    console.log(`I drove to the mountains`);
    console.log(`I had a picnic`);
} else if (day === "wednesday" || day === "thursday"){
    console.log("workout and cook")
}else {
    console.log("didnt record the other days");
};