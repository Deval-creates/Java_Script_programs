const m = require("./17-module.js"); // importing a module that we have created
// const {a, abc} = require("./17-module") // object destructuring
// console.log(a);
// abc();
console.log(m.a);
m.abc();


// so 17-module.js that we have just imported is an example of Local (User-defined) Modules

// there are some other types of modules like 
// core built-in modules which comes with node so we dont need to create them and we dont need to install them
// third party modules which is installed via npm 
