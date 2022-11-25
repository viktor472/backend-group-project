const express = require('express');
const app = express();
const items = require("./routes/items");

var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;


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


//Server listener
app.listen(PORT, err => 
{
    if (err) 
    {
        return console.log('Error', err);
    }
    else
    {
        console.log(`Server listening on port ${PORT}...`);
    }
});