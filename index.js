const http = require("http");
const mongodb = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const server = http.createServer((request,response)=>{
    const data = {
        name : "a@gmail.com",
        password : "12345"
    }
    mongodb.connect(url).then((conn) => {
       const db = conn.db();
       db.createCollection("users").then((coll) => {
            console.log("Collection Created");
            db.collection("users").insertOne(data).then((dataRes) => {
                response.writeHead(200,{
                    "Content-Type" : "application/json"
                });
                const res = JSON.stringify({
                    message : "Data Crteated",
                    data : dataRes
                });
                console.log(res)
                response.write(res);
                response.end();

            }).catch((err) => {
                console.log("No Data Created",err)
            });
       }).catch((err) => {
        console.log("Error while creating collection",err)
       });
    }).catch((err) => {
        response.write("While making connection wiuth Mongodb");
        response.end();
    });
});

server.listen(5020);



/* const http = require("http");
const mongodb = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const server = http.createServer((request,response)=>{
    const data = {
        name : "a@gmail.com",
        password : "12345"
    }
    mongodb.connect(url).then((conn)=>{
        const db = conn.db("just");
        db.createCollection("users").then((result) => {
            db.collection("users").insertOne(data).then((result) => {
                response.writeHead(200,{
                    "Content-Type" : "application/json"
                });
                const res = JSON.stringify({
                    message : "DATA Inserted"
                });
                response.write("success");
                response.end();
            }).catch((err) => {
                response.writeHead(500,{
                    "Content-Type" : "application/json"
                });
                const res = JSON.stringify({
                    message : "Inetrnal Server Error while adding data, please contact the admin"
                });
                response.write(res);
                response.end();
            });
        }).catch((err) => {
            console.log("Error while creating collection",error)
        });
    }).catch((error)=>{
        console.log("Error While connecting with database",error)
    });
    response.end();
});

server.listen(5020); */