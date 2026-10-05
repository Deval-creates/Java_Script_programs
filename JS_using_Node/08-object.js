let name = 'Mike';
let age = 32;
let city = 'Miami';
let state = 'Florida';
let occupation = 'Painter';
/* if we want to store a person's information in our program
 we will have multiple variable and when we want to add many person
 so as data grows it is hard to manage the variables 
 so that is why we need to use objects */

let person1 = {
    name: 'Mike',
    age: 32,
    city: 'Miami',
    state: 'Florida',
    occupation: 'Painter'
}

let person2 = {
    name: 'Nancy',
    age: 23,
    city: 'Banglore',
    state: 'Karnataka',
    occupation: 'Analyst'
}

console.log(person1, person2);
// now we are accessing full information about person
// what if we want to access only their name so for that use dot notation

console.log(person1.name);
console.log(person2.age);

// we can also modify object using dot notation
// we can change age of first person from 32 to 35

person1.age = 35;
console.log(person1.age); //35

// now we can add some more key and its values
person2.salary = 70000;
console.log(person2);

//now lets delete the salary 
delete person2.salary;
console.log(person2);