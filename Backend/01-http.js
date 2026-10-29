



const http = require('http');

const server = http.createServer((req, res)=>{
    res.write("<h1>Hello</h1>");
    res.end();
})

server.listen(3000, ()=>{
    console.log("server is listening on 3000");
});

// now we have created a web server and web server keep on listening to requests