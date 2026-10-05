let employee = {
    name: 'Tom',
    post: 'Android Developer',
    age: 30,
    salary: 4500
}

// get all keys of an object
let keys = Object.keys(employee);
console.log(keys);

// get all values of an object
let values = Object.values(employee);
console.log(values);

// get both
let entries = Object.entries(employee);
console.log(entries);