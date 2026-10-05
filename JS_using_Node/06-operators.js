// Logical operators are used to combine boolean expressions
// logical and --> &&
let x = 1;
let y = 2;
console.log(x>0 && y>0); //true because both conditions are true
console.log(x>0 && y<0); //false because one condition is false


// logical or --> ||
console.log(x<0 || y>0); //true because at least one is true
console.log(x<0 || y<0); //false because both conditions returns false


// logical not --> !
console.log(!true); // this is false
console.log(!false); // this is true

// in JS 0, null, undefined, empty strings these are considered false
// numbers other than zero are true and non-empty string is true
if(0){ // since 0 is considered false this block never runs
    console.log('This is an if condition');
}

if(''){ // since empty string is considered false this block never runs
    console.log('This is an if condition');
}

if(null){ // since null is considered false this block never runs
    console.log('This is an if condition');
}

if(3){ // since non-zero number is considered true this block runs
    console.log('This is another if condition');
}

