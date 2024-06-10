const http = require("http");
const server = http.createServer((request,response)=>{
    let username = "a@gmaidl.com";
    if(username == "a@gmail.com"){
        response.writeHead(200,{
            "Content-Type" : "application/json"
        });
        const res = JSON.stringify({
            message : "login Successfull"
        });
        response.write(res);
        response.end()
    }
    else{
        response.writeHead(401,{
            "Content-Type" : "application/json"
        });
        const res = JSON.stringify({
            message : "User Not Authenticated"
        });
        response.write(res);
        response.end()
    }
    
});

server.listen(5020);