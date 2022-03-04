const express = require("express");
const meta=require("../controllers/meta");

const app = express();

app.get("/", meta.home);

app.post("/", meta.metadata);

module.exports=app;