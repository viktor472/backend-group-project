const express = require("express");
let router = express.Router();
//const Item = require('../models/item');
const itemController = require("../controller/itemController.js")
//const fs = require('fs');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

//Read data from data.json file
//let rowData = fs.readFileSync('./data.json');
//let data = JSON.parse(rowData);
//console.log(data);

/*********************************************************** 
/ Return all items
************************************************************/

router.get('/', itemController.getAllItems);

/*********************************************************** 
/ Return a specific item by id
************************************************************/

router.get('/:id', itemController.getItemById);


/*********************************************************** 
/ Return a specific item by id
************************************************************/

router.get('/name/:title', itemController.getItemByName);


/*********************************************************** 
/ Create a new item
************************************************************/

router.post('/', itemController.createNewItem);


/*********************************************************** 
/ Uppdate a specific item
************************************************************/

router.put('/:id', itemController.uppdateItemById);

/*********************************************************** 
/ Delete specific item
************************************************************/
router.delete('/:id', itemController.deleteItemById);


module.exports = router;