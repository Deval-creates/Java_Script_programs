// we already know about callback function
// Java Script is a single threaded language 

console.log("Start");
function f1(abc){
    console.log("This is f1 code");
    abc();
}
f1(()=>{
    console.log("This is call back code");
})
console.log("End");

// But there are some cases where we need to execute a task without blocking the main thread like
// fetching some data from server, reading and writing file
// But what if the file takes some time to read so the thread is busy and our program is slow because nothing else can run before that
// This is called blocking behavior

const { readFileSync} = require('fs');
const { readFile, writeFile } = require('fs');
console.log('start');
console.time();
const first = readFileSync('./content/demo.txt', 'utf8');
console.log(first);
console.timeEnd();
console.log('End');

/* from the above example you can see it executed synchronously 
because readFileSync is synchronous */

/* now to make it asynchronous we are using readFile and callbacks */
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    const second = result;
    writeFile(
      './content/third.txt',
      `Here is the third text  : ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return
        }
        console.log('done with this task');
      }
    )
  })
})
console.log('starting next task');

/* so as you can see from above example node provided us readFile and writeFile methods to make the code asynchronous */
/* but this creates call back hell which means lots of callback functions are hard to read so for that reason JS introduces the concept of
promises and async await */

