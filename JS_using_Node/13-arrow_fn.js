// arrow function does not need any function keyword or name while making
let a = () => {
    return 'some text'
}

console.log(a());

setTimeout(() => console.log("Runs after 1s")
        , 1000);  // if there is only one line you dont need curly braces