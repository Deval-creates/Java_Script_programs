/* A module is a file that contains variables, functions, classes etc
that we can export and use in another file*/
/* every file in node is a module */
let x = 10;
let y = 5;
let cba = function xyz(){
    console.log("xyz function");
}
module.exports = {
    a:x,
    b:y,
    abc:cba
};

