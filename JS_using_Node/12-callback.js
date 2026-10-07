// callback is a function which is passed in another function
function square(num,message){
    console.log('square of num is ' + num*num);
    message(); //callback function
}
let m = function message(){
    console.log("function ends");
}

square(3, m);