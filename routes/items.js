const express = require("express");
let router = express.Router();

var bodyParser = require('body-parser');
const fs = require('fs');

router.use(bodyParser.json());

//Read data from data.json file
let rowData = fs.readFileSync('./data.json');
let data = JSON.parse(rowData);
console.log(data);

/*********************************************************** 
/ Return all items
************************************************************/

router.get('/', function (req, res) 
{
    res.status(200).json(data);
})

module.exports = router;