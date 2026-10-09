// callback is a function which is passed in another function
function square(num,m){
    console.log('square of num is ' + num*num);
    m(); //callback function
}
let m = function message(){
    console.log("function ends");
}

square(3, m);