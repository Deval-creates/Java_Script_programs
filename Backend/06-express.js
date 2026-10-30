const express = require('express');
const path = require('path');
const app = express()

// middleware
app.use(express.static('./navbar'));

app.get('/', (req, res) => {
    console.log('User hit the server');
    res.status(200).sendFile(path.join(__dirname,'./navbar/index.html'))
})


app.all('*',(req, res)=>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(5000, () => {
    console.log("Server is listening on 5000");
})