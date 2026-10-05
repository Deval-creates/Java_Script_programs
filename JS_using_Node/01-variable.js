// in JS variables are containers where we can store our values
// there are four ways to declare variables in JS
var a = 5;
let b = 6;
const c = 7;
d = 8;
// console.log() method is used to print something on the console
console.log(a,b,c,d);

// so the question is why we have four types of variable declarations in JS
/* the variable which are declared using var keyword are function scoped
 as well as can be global if declared outside a function */
 var y = 10;
 function example(){
    var x = 20;
    console.log(y);
    console.log(x);
 }
 example();
 // console.log(x); --> this will give error because we are accessing x outside the function

/* 
    one more important thing about variables declared with var is they are not blocked scoped
    that means they can be in a block but can be accessed outside of that block but in same function
*/
function example2(){
    if (true){ // this is an if block
        var x2 = 3;
    }
    console.log(x2); // see we can access it outside the block
}
example2();

//Redeclaration allowed
var h;
var h;

//Reassignment allowed
var h1 = 4;
var h1 = 5;

/* now we have come to the variables declared with let keyword 
this one is blocked scope*/
function example3(){
    if(true){
        let z = "Martin";
    }
    console.log(z); //we tried to access it outside if scope
}
// example3(); --> this line will give error 
/*because after function runs the if 
condition is true so z will be initialized with string "Martin".
But we are trying to access it outside the if scope which is error
*/

// Redclaration not allowed
let g1;
// let g1; --> this line will give error because redeclaration of variable using let keyword is not allowed in same scope.

//Reassignment allowed
let y1 = "David";
y1 = "Yogendra"; // we reassigned y1 with something else --> no error because its possible.

//now we have come to the variables declared with const keyword

// its scope is as same as let which means it is blocked scoped

//Redeclaration not allowed
const u = 10; // const variables must be initialized with declaration
// const u; --> this will give error because only declared not initialized
// const u = 11; --> it will give error because we are declaring it again.

//Reassignment also not allowed
// u = 11; --> reassignment to const variable is not allowed 
console.log(u);






