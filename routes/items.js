const express = require("express");
let router = express.Router();
const Item = require('../models/item')

var bodyParser = require('body-parser');

router.use(bodyParser.json());

/*********************************************************** 
/ Return all items
************************************************************/

router.get('/', async function (req, res)
{
    //res.status(200).json(data);
    try{
        console.log('Inside get items functions');
        const items = await Item.find();
        res.status(200).json(items);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
  
})

/*********************************************************** 
/ Create a new item
************************************************************/
router.post('/', async function (req, res)
{
    //get data fro request
    const item = new Item
    ({       
            itemId: req.body.id,                  // get id from POST req
            title: req.body.title,            // get title from POST req       
    })

    try{
        console.log('Inside post item functions');
        //save new item in the datadase
        const newItem = await item.save();
        res.status(201).json(newItem);
    }
    catch(err){
        res.status(400).json({message: err.message});
    } 
})

module.exports = router;