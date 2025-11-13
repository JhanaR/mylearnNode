// const http = require("http");
// const httpServer = http.createServer();

const { createServer } = require("http");
const { readFile } = require("fs");

const server = createServer((req,res)=>
readFile("home.html","utf-8",(error,data)=>{
    if(error) {
        res.end("Error: " + error.message);
    }else {
        res.end(data)
    }
})
);

server.listen(5000,()=>{
    console.log("started in 5000")
})