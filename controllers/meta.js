const express=require("express");
const axios = require("axios");
const cheerio = require("cheerio");


module.exports={
    home: (req, res) => {
        res.sendFile(__dirname+"/index.html");
    },
    metadata: (req, res) => {

        axios.get(req.body.name)
            .then((response) => {
                let $ = cheerio.load(response.data);
                let articles = {
                    title: $("#productTitle").text(),
                    description: $("#feature-bullets>ul").children().first().children().text(),
                    images: $("#imgTagWrapperId").children().attr("src")
                };
    
                //To write to an internal file

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
    }
};