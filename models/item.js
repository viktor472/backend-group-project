const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
{
    itemId:
    {
        type: Number 
    },
    title:
    {
        type: String
    }
})

module.exports = mongoose.model('Item', itemSchema);