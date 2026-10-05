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