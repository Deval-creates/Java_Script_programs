/*In Node.js, a module is a reusable block of code whose functionality is 
encapsulated and can be imported into other parts of an application.*/
let x = 10;
let xyz = function xyz(){
    console.log("xyz function");
}
module.exports = {
    a:x,
    xyz:xyz
};

