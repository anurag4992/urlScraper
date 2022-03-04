const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/keys");
const metaData=require("./routes/route");

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", metaData);

app.listen(PORT, function () {
    console.log("Server has started on port 3000");
});