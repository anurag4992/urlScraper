const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const { PORT } = require("./config/keys");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {

    axios.get(req.body.name)
        .then((response) => {
            let $ = cheerio.load(response.data);
            let articles = {
                title: $("#productTitle").text(),
                description: $("#feature-bullets>ul").children().first().children().text(),
                images: $("#imgTagWrapperId").children().attr("src")
            };

            // fs.writeFile('./articles.json', JSON.stringify(articles, null, 4), (error) => {
            //     if (error) throw error;
            //     else {
            //         res.redirect("/");

            //     }
            // });

            JSON.stringify(articles, null, 4);
            res.send(articles);
            
        })
        .catch((error) => {
            console.log(error);
        });
});

app.listen(PORT, function () {
    console.log("Server has started on port 3000");
});