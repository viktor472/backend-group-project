const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

//Read data from data.json file
let rowData = fs.readFileSync('data.json');
let data = JSON.parse(rowData);
console.log(data);
