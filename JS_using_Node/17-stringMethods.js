let k = "Text";

console.log(k.length); // using .length property

console.log(k.charAt(1)); // using charAt() method


let g = "Hello, I am from India";

console.log(g.indexOf('a')); //using index of 

console.log(g.lastIndexOf('a')); //using last index of

console.log(g.includes('from')); // using includes, it return true or false
console.log(g.includes('From')); // Now this is false

console.log(g.slice(0,5)); // return string value from 0 index to 4 index

console.log(g.substring(12, 16)); 


console.log(g.slice(-6, -1)); // slice supports negative indexing 


g.replace("I", "We");
console.log(g); //string is immutable that's why no change

let y = g.replace("I", "We"); // make some change and assign it to new variable

console.log(y);
console.log(g); // original string no change

console.log(g.split(" ")); // returns array, split on the basis of spaces
console.log(g.split(",")); // returns array, split on the basis of comma




let i = "EXAMPLE";
let j = "demonstration";
console.log(i.toLowerCase());
console.log(j.toUpperCase());








