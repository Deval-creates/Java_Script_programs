//there are 7 primitive data types in Java Script
let a = 8; //number
let ba = 123n; //Big Int
console.log(typeof(ba));


let b = "Jack"; //String


let x = true;
let y = false; //Boolean


let u = undefined;
let i; //undefined


let n = null; //null

let s1 = Symbol(); //symbol
// symbol is a special value that is unique
// so we use symbols when we want unique values
// usually we use symbols when we want avoid name conflicts between keys of an object
let s2 = Symbol();
console.log(s1===s2); //false that means both symbols are unique


// there is one object type in Java Script
let obj = {
    name:'Tom',
    age: 32,
    gender: 'male',
}
console.log(obj);
console.log(typeof obj);

// home work 
// find out why typeof(null) returns an object not null
// hint- it is something about a bug and backward compatibility
console.log(typeof null);
