const http = require("http");
const server = http.createServer((request,response)=>{
    console.log("success");
    response.end()
});

server.listen(5020);