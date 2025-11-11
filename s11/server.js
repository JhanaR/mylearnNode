 //importing http module from node
const http = require("http");

const server = http.createServer((req,res)=>{
   res.end("Working")
})

server.listen(3000,()=>{
   console.log("listening"); 
})
