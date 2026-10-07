// functions are reusable block of code designed to perform some task
// functions are created in Java Script by using function keyword
function greet(name){
    return 'hello' + name; // function with return value
}

console.log(greet(' Java Script'));



function fun1(){
    console.log("Learn JS"); //function with out return value
}

fun1(); // calling fun1() function

// function expression --> storing a function in a variable
let fun2 = function abc(){
    console.log('Java Script');
}

console.log(fun2); // reference of a function

console.log(fun2()); // actual function runs, this gives undefined because of no return value


// we can also assign it without using any name
let fun3 = function (){
    return 'xyz function';
} 
