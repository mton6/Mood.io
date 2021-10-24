const express = require("express");
const cors = require('cors');
const path = require("path");
import * as tf from "@tensorflow/tfjs";
const tf = require("@tensorflow/tfjs");
// const translateText = require("../utility/translate.js");
// const transformText = require("../utility/transformer.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.text());
app.use(express.json());
app.use(cors());

const publicDirectoryPath = path.join(__dirname, "../public");
const mlDirectoryPath = path.join(__dirname, "../ml");
console.log(publicDirectoryPath);

app.use(express.static(publicDirectoryPath));
app.use(express.static(mlDirectoryPath));

// Where model lives on server
// http://localhost:3000/tfjs_files/model.json



let model;

(async function() {
    model = await tf.loadModel("http://localhost:3000/tfjs_files/model.json");
    console.log(model);
})();

// If wrong link is provided instructions are provided below
app.get("*", (req, res) => {
    res.send("Default statically rendered page");
});


// Server listens to incoming request.
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});