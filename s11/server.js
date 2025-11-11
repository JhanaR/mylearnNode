 //importing http module from node
const http = require("http");

const server = http.createServer((req,res)=>{
   // console.log(req.method)//it will tell us which type of method we are requesting from client
   req.on("data",(reqData)=>{
      console.log(reqData)
   })
   res.end("Working")
})

server.listen(3000,()=>{
   console.log("listening"); 
})
