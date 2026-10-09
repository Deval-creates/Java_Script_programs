/* hoisting is Java Script's behavior of moving declarations to the top of their scope
during compilation phase before the code actually runs.
*/
console.log(a); // it gives undefined because only declaration is hoisted not initialization
var a = 5;

//console.log(b); //error because it is hoisted but in TDZ 
let b=6;

//so in summary b can not be accessed before declaration line
//same happens for variables declared with const


// console.log(c); //error 
c = 5;