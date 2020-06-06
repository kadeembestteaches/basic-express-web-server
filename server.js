

//imports the express module into our code and assigns it to a variable
const express = require("express");
const file = require("fs");// fs is a core module

//create express app object (THE BOSS, THE CEO to the 10th!!! )
const app = express();


//routes
app.get("/",(req,res)=>{ //route handler

    file.readFile("html/index.html",(err,data)=>{

        if(!err)
        {
            
            res.setHeader("Content-Type","text/html")
            res.write(data);
            res.end();
        }

        else
        {
            console.log(`Error happend :${err}`);
        }

    })
    //read the index.html file
    //and send that back to the client

});

////basedomain.com/about
app.get("/about",(req,res)=>{

    file.readFile("html/about.html",(err,data)=>{

        if(!err)
        {
            
            res.setHeader("Content-Type","text/html")
            res.write(data);
            res.end();
        }

        else
        {
            console.log(`Error happend :${err}`);
        }

    });
    
});

////basedomain.com/services
app.get("/services",(req,res)=>{

    res.send("Service");

});
//Types of HTTP REQUEST :
//GET - Fetch resource
//POST  - Send data 
//PUT  - Update resource that already exists
//DELETE - delete resource

//create our webserver 
//Listen to HTTP Requests   
// PRocesses or Handle  the Request
//Return a Response
app.listen(3000,()=>{

    console.log("Web Server is up and running!")
});




