/* A Promise is an object.  It's a way to handle asynchronous code 
more elegantly than traditional callbacks. */

// creating a promise object
// the call back inside promise constructor runs when we create promise object
let p1 = new Promise(() => {
    console.log("Promise Example");
})


const { readFile, writeFile } = require("fs");

let p2 = new Promise((resolve, reject) => {
    readFile("./content/demo.txt", "utf8", (err, result) => {
        if (err) {
            reject(err);      
            return;            
        }
        resolve(result);      
    });
})
    .then((result) => {
        console.log(result); 
        writeFile(
            "./content/example.txt", 
            "new file\n" + result, 
            (err, result) => {
                if(err){
                    console.log(err);
                }
            }
    )})
    .catch((error) => console.log("Error:", error));

