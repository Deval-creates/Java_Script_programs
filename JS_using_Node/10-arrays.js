// Arrays in JS

let arr = [1, 2, 'a', 'b']; // indexing start with 0

console.log(arr[1]);

//changing values
arr[1] = 4;

console.log(arr[1]);

// finding length of an array
console.log(arr.length);


// adding element
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
// arr.splice(2, 1, 30); // remove 1 element
console.log(arr2); // [10, 20, 30, 40, 50]