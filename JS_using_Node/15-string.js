// string is a sequence of characters and it is immutable
// string is a primitive data type
// string also have indexing like arrays


let a = "Tina"; // using double quotes " "
let b = 'Saket'; // using single quotes ' '
let c = `Zaid`; // using backtick ` `


console.log(a, b, c);
console.log(a === b); // false

console.log(a[0]); // T

a[0] = "R"; // changing string characters is not possible 
// because string is immutable
console.log(a); // still Tina value not changed

// string concatenation
let h = a + " " + b;
console.log(h);

let age = 21;
let o = `Your age is ${age}. Thankyou`;
console.log(o);