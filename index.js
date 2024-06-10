const http = require("http");
const server = http.createServer((request,response)=>{
    let date = new Date();
    let c_date = date.toTimeString();
    response.writeHead(200,{
        "content-Type" : "application/json"
    })
    const res = JSON.stringify({
        date : c_date
    });
    response.write(res)
    response.end();

    
});

server.listen(5020);