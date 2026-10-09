// taking input directly in node is little bit complex 
// for that we need to use read line module
// a module is like a pre-written code which we can use 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", (answer) => {
  console.log("Hello, " + answer );
  rl.close();
});

