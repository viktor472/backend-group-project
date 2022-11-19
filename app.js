const express = require('express');
const app = express();
const items = require("./routes/items");
const mongoose = require("mongoose");

var MongoClient = require('mongodb').MongoClient;

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
/* app.listen(port, err => 
    {
        if (err) 
        {
            return console.log('Error', err);
        }
        else
        {
            console.log(`Server listening on port ${port}...`);
        }
    }); */

mongoose.connect('mongodb://127.0.0.1/Item', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));



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
