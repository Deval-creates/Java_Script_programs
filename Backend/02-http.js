const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
      res.end('Welcome to our home page')
    } 
    else if (req.url === '/about') {
      res.end('Here is our about page')
    } 
    else if(req.url === '/contact'){
      res.end('Here is the contact page')
    }
    else {
      res.end(`
        <h1>Oops!</h1>
        <p>can't find the page you are looking for</p>
        <a href="/">back home</a>
      `)
    }
  }
)

server.listen(5000, ()=>{
    console.log("server is listening on 5000");
});