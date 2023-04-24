
// import express from "express"
// import * as fs from "fs"
const fs = require("fs");
const express = require("express");
const path = require("path");

//path
const dirpath = path.join(__dirname, "timestamp");
console.log("dirpath", dirpath);

//initializing express server
const app = express();

//middlewares
app.use(express.static("timestamp"));

app.get("/static", (req, res) => {
    let time = new Date();
    let dateString = time.toUTCString().slice(0, -3);
    let content = `Last Updated timeStamp is ${dateString}`

    fs.writeFileSync(`${dirpath}/date-time.txt`, content, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("file created successfully");
        }
    })
    res.sendFile(path.join(__dirname, "timestamp/date-time.txt"));

})

//set server listen under port:5000
app.listen(5000, () => console.log(`server started in localhost:5000`));
