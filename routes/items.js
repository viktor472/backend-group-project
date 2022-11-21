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
        console.log('Inside get all items function');
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
    //get data from request
    const item = new Item
    ({       
            id: req.body.id,                  // get id from POST req
            title: req.body.title,            // get title from POST req       
    })
    console.log(item);
    try{
        console.log('Inside post item function');
        //save new item in the datadase
        const newItem = await item.save();
        res.status(201).json(newItem);
    }
    catch(err){
        res.status(400).json({message: err.message});
    } 
})

/*********************************************************** 
/ Get a specific item by custom id
************************************************************/
router.get('/:id', async function (req, res)
{
    //res.status(200).json(data);
    try{
        console.log('Inside get a specific item function');
        const items = await Item.find({"id":parseInt(req.params.id)});
        if (items.length == 0)
        {
            return res.status(404).json({message: 'The item does not exist'})
        }
        else 
        {
            res.status(200).json(items);
        }       
    }
    catch(err){
        res.status(500).json({message: err.message});
    } 
})

/*********************************************************** 
/ Update existing item
************************************************************/

router.put('/:id', async function (req, res)
{
    let items = await Item.find({"id":parseInt(req.params.id)});
    console.log(items);
    try{
        console.log('Inside post item function');
        //save new item in the datadase
        await Item.updateOne({"id":parseInt(req.params.id)}, {title:req.body.title});
        items = await Item.find({"id":parseInt(req.params.id)});
        res.status(201).json(items);
    }
    catch(err){
        res.status(400).json({message: err.message});
    } 
})

/*********************************************************** 
/ Delete a specific item
************************************************************/

router.delete('/:id', async function (req, res)
{   
        console.log('Inside delete a specific item function');
        //const item = await Item.findById(parseInt(req.params.id));
        //{"yourFieldName":yourValue}
        let items = await Item.find({"id":parseInt(req.params.id)});
        console.log(items);
        const item = items[0];
        console.log(item);

        console.log('Inside delete try ');
        //save new item in the datadase
    
      
})


module.exports = router;