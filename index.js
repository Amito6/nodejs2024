const http = require("http");
const queryString = require("querystring");
const server = http.createServer((request,response)=>{
    if(request.method == "GET"){
        let {username,password} = queryString.parse(request.url.replace("/?",""));
        if(username == "a@gmail.com" && password == "12345"){
            response.writeHead(200,{
                "Content-Type" : "application/json"
            });
            response.write(JSON.stringify({
                message : "Login SuccessFull",
                username,
                password
            })
        );
            response.end();
        }
        else{
            response.writeHead(401,{
                "Content-Type" : "application/json"
            });
            response.write(JSON.stringify({
                message : "User Not Authorized",
            })
        );
            response.end();
        }
    }/* post method */
    else{
        let userData = "";
        request.on("data",(chunks)=>{
            userData += chunks;
        })
        request.on("end",()=>{
            const {username,password} = queryString.parse(userData);
            if(username == "a@gmail.com" && password == "12345"){
                response.writeHead(200,{
                    "Content-Type" : "application/json"
                });
                response.write(JSON.stringify({
                    message : "Login SuccessFull",
                    username,
                    password
                })
            );
                response.end();
            }
            else{
                response.writeHead(401,{
                    "Content-Type" : "application/json"
                });
                response.write(JSON.stringify({
                    message : "User Not Authorized",
                })
            );
                response.end();
            }
        })
    }

    
});

server.listen(5020);