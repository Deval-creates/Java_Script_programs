// comparision operators
console.log(3 == 3); //true // equal to operator

console.log(3 == '3') // also true which is not good

// so for that we have strict equal to operator "==="
console.log(3 === '3'); // now it also compare the types



let x1 = 5;
let x2 = 5;
console.log(x1 != x2) // false because both the value are equal

let y1 = 6;
let y2 = '6';
console.log(y1 != y2); //false but one is number and one is string

// so for that use strict not equal to
console.log(y1 !== y2); // true


console.log(3 > 2); // true
console.log(5 < 2); // false

console.log(4 >= 3); // true
console.log(4 <= 3); //false


// note:- comparision operators only return boolean value(true or false)