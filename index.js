const http = require("http");
const fs = require("fs");
const server = http.createServer((request,response)=>{
    if(request.url == "/" || request.url == "/home"){
        fs.readFile("index.html",(error,dataRes)=>{
            if (error) {
                throw error;
            }
            else {
                response.write(dataRes);
                response.end();
            }
        })
    }
});

server.listen(5020);