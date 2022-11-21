const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
{
    id:
    {
        type: Number,
        required :true,
        unique: true
    },
    title:
    {
        type: String,
        required :true
    }
}, { versionKey: false })

module.exports = mongoose.model('Item', itemSchema);