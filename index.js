const http = require("http");
const mongodb = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const server = http.createServer((request,response)=>{
    const data = {
        name : "a@gmail.com",
        password : "12345"
    }
    /* insertOne for one object  // insertMany for ana array of objects */
    /* .find().toArray().===> if limited data then .limit(number for the amount of data you are looking for ) */
    /* for any particular filter in query sleect the key which we want to filter like the dtaa having shoes as one of the product but now we want to fileter the rpices based on ome numbers so in wuery select prices as filter ansgive that as on object with $gt,$gte or like that to have a refernecv value */

    /* aslo regex can be used to validate taext with //so in find generally what we do is we try to funs the datares and the n comaing its length with >0 so we can give response accordningly and if not then we can give the response accotrdinlgy as iit is not the catch response
    
    then also if want to find only a particular set of data the $in or $or .sort can be used in filtering outr the data with an given object with key properties as desc aoor asc
    
    and for the updfate one we need to give two objects the first one is from where we can define the one partmemeter to find which one we want to update and the seconfd one th object with which we want to change it completelyin the update one the second parameteres needs to given in a way that it is having $ set as keyt value and then the object*/
    mongodb.connect(url).then((conn) => {
       const db = conn.db();
       db.collection("users").find({},{projection:{_id : 0,name:0}}).toArray().then((dataRes) => {
        console.log(dataRes);
        response.end();
       }).catch((err) => {
        console.log("Error while finding data");
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