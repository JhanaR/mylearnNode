const http = require("http");
const PORT = 3000;

const httpServer = http.createServer((req,res)=>{
    console.log("day9")
    res.end("name:jhana")
})

httpServer.listen(3000,()=>{
    console.log("listening")
})