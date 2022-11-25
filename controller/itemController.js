
//router.use(bodyParser.json());
var bodyParser = require('body-parser');
const fs = require('fs');

//Read data from data.json file
let rowData = fs.readFileSync('./data.json');
let data = JSON.parse(rowData);
console.log(data);

/*********************************************************** 
/ Return all items
************************************************************/
exports.getAllItems = function (req, res) 
{
    res.status(200).json({       
        msg: "This is method GET all items",
        status: "Success",
        amoutn_of_items: data.length,
        data : data});
}

/*********************************************************** 
/ Return a specific item by id
************************************************************/
exports.getItemById =function (req, res) 
{
    //Find an item with a specific id in data
    let foundItem = data.find(function (item) 
    {
        return item.id === parseInt(req.params.id);
    });

    //If item found return an item otherwise return 404 not-found
    if (foundItem) 
    {
        res.status(200).json({
            msg: `This is method GET item by id ${foundItem.id}`,
            status: "Success",
            data  : foundItem});
    } 
    else 
    {
        res.sendStatus(404);
    }
}


/*********************************************************** 
/ Return a specific item by name
************************************************************/
exports.getItemByName = function (req, res)
{
    //Find an item with a specific id in data
    let foundItem = data.find(function (item) 
    {
        return item.title === req.params.title;
    });

    //If item found return an item otherwise return 404 not-found
    if (foundItem) 
    {
        res.status(200).json({
            msg: `This is method GET item by name ${foundItem.title}`,
            status: "Success",
            data  : foundItem});
    } 
    else 
    {
        res.sendStatus(404);
    }
}

/*********************************************************** 
/ Create a new item
************************************************************/
exports.createNewItem = function (req, res) 
{

    //Create an array of all ids
    let itemIds = data.map(item => item.id);

    //Create an Id for a new item
    let newId = Math.max(...itemIds) + 1;  //itemIds max value + 1;

    // Create a new Item
    let newItem = 
        {
            id: newId,                        // generated above 
            title: req.body.title,            // get title from POST req
        };

    //Add a new item to data
    data.push(newItem);
    //Write new data to file
    fs.writeFileSync('data.json', JSON.stringify(data));
    //Send status and data
    res.status(201).json({
        msg: `This is method CREATE a new item with id  ${newItem.id}`,
        status: "Success",
        data  : newItem}       
        );
}


/*********************************************************** 
/ Uppdate a specific item
************************************************************/
exports.uppdateItemById = function (req, res) 
{
    //Find an item with a specific Id in data
    let foundItem = data.find(function (item) 
    {
        return item.id === parseInt(req.params.id);
    });

    //If item found uppdate an item otherwise return 404 not-found
    if (foundItem) 
    {
        let updatedItem = 
        {
            id: foundItem.id,
            title: req.body.title,        // get title from put req
        }
        //Update data
        let indexItem = data.indexOf(foundItem);
        data.splice(indexItem, 1, updatedItem);
        //Write new data to file
        fs.writeFileSync('data.json', JSON.stringify(data));
        //res.sendStatus(204);
        res.status(200).json({
            msg: `This is PUT item by id ${foundItem.id}` ,
            status: "Success",
            data  : updatedItem
        })
    }
    else
    {
        res.sendStatus(404)
    }    
}


exports.deleteItemById = function (req, res) 
{
    //Find item with a specific id in data 
    let foundItem = data.find(function (item) 
    {
        return item.id === parseInt(req.params.id);
    });

    //If item found uppdate an item otherwise return 404 not-found
    if (foundItem) 
    {
        //If the item exists find its index
        let targetIndex = data.indexOf(foundItem);

        //Delete item from data array using index
        data.splice(targetIndex, 1);

        //Write new data to file
        fs.writeFileSync('data.json', JSON.stringify(data));
        res.status(204).json({});
    }
    else
    {
        res.sendStatus(404)
    }  
    
}