
const http = require("http");
const {readFileSync} = require('fs');
const homePage = readFileSync('./navbar/index.html')
const homeStyles = readFileSync('./navbar/styles.css')
const homeLogic = readFileSync('./navbar/browser-app.js')

const server = http.createServer((req, res) => {
    
    if(req.url === "/"){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(req.url === "/styles.css"){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(req.url === "/browser-app.js"){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else if(req.url === "/about"){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else if(req.url === "/contact"){
        console.log(req.url);
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>Contact Page</h1>')
        res.end()
    }
    else {
        console.log(req.url);
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Not Found</h1>')
        res.end()
    }
})

server.listen(5000, ()=>{
    console.log("server is listening on 5000");
})