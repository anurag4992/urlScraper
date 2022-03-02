const express=require("express");
const bodyParser=require("body-parser");
const getMetadata=require("metadata-scraper");

const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    const input=req.body.name;
    getMetadata(input).then(data => {
        res.send(data);
    });

});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
    console.log("Server has started on port 3000");
});