// Arrays in JS

let arr = [1, 2, 'a', 'b']; // indexing start with 0

console.log(arr[1]); 

//changing values
arr[1] = 4;

console.log(arr[1]);

// finding length of an array
console.log(arr.length);


// adding element at last
arr.push('c');
console.log(arr);

// remove an element from last
arr.pop();
console.log(arr);


// add element to start
arr.unshift(5);
console.log(arr);

// remove element from start
arr.shift();
console.log(arr);


// reverse an array
console.log(arr.reverse());

// insert an element at a specific position in an array
const arr2 = [10, 20, 40, 50];

// Insert 30 at index 2
arr2.splice(2, 0, 30); //2 -> index 2, 0 -> dont remove anything, 30 -> add 30 at index 2
// arr2.splice(2, 1, 30); // remove 1 element
console.log(arr2); // [10, 20, 30, 40, 50]



// In Java Script array is an object
console.log(typeof(arr2)); // object

let obj = {
    0:10,
    1:20,
    2:30,
    3:40,
    name: 'Kamlesh'
}

console.log(obj[0]); // 10, accessing value just like an array
console.log(obj['name']); // Kamlesh


// array made with const can be changed 
const arr3 = ['Steve', 'Sanjay', 'Angie', 'Christie'];
arr3[0] = 'Stephen';
console.log(arr3);


// using for loop to print array
let a1 = ['a','b','c','d','e','f','g','h'];
for(let k in a1){
    console.log(k, a1[k]);
}


// for each method -> forEach()
let ar1 = [1,2,3,4,5,6];
ar1.forEach(
    (e) => {console.log(e**2);} 
)

ar1.forEach(
    (element, index, a) => {console.log(element, index, a);}
)



// map method -> map()
const xyz = [1,2,3,4,5,6];
const cba = xyz.map((e)=>e**3);
console.log(cba);


// filter method -> filter()
const w = [1,2,3,4,5,6,7,8,9,10];
const e = w.filter((e)=>e%2===0);
console.log(e); // only even values


// reduce method -> reduce()
const ar4 = [1,2,3,4,5];
const fact = ar4.reduce((s,e)=>s*e,1);
console.log(fact);


// index of method -> indexOf()
let arr5 = [101,102,103,104,105];
console.log(arr5.indexOf(103));


// lastIndexOf()
let arr6 = [101,103,102,103,104,103,105];
console.log(arr6.lastIndexOf(103));
console.log(arr6.indexOf(103,2)); // check after index 2

// includes()
console.log(arr6.includes(102)); //true
let str_arr = arr6.join(); 
console.log(str_arr);
console.log(typeof str_arr);


//using spread operator to combine the following arrays
let arr7 = [1,2,3];
let arr8 = [4,5,6];
let arr9 = [7,8,9];
let arr10 = [...arr7, ...arr8, ...arr9];