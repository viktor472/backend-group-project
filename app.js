const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const fs = require('fs');
const port = 8080;

app.use(bodyParser.json());

//Read data from data.json file
let rowData = fs.readFileSync('data.json');
let data = JSON.parse(rowData);
console.log(data);

//-----------------------------------------------------------------------------

/*********************************************************** 
/ Base URL
************************************************************/

app.get('/', function (req, res) 
{
  res.send('Hello World');
})

/*********************************************************** 
/ Return all items
************************************************************/

app.get('/items', function (req, res) 
{
    res.status(200).json(data);
})


//-----------------------------------------------------------------------------
//Server listener
app.listen(port, err => 
{
    if (err) 
    {
        return console.log('Error', err);
    }
    else
    {
        console.log('Server listening on port 8080...');
    }
});