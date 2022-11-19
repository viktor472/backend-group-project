const express = require('express');
const app = express();
const items = require("./routes/items");

var bodyParser = require('body-parser');
const port = 8080;

//all endpoints that stsrt with /items reconnect to items.js file
app.use("/items", items);

//-----------------------------------------------------------------------------

/*********************************************************** 
/ Base URL
************************************************************/

app.get('/', function (req, res) 
{
  res.send('Hello World');
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
            console.log(`Server listening on port ${port}...`);
        }
    });