const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true
    }
    ,
    quantity : {
        type: Number,
        required: true
    }

}, 
{
    timestamps: true
});

const Product = mongoose.model('Product', productsSchema);
module.exports = Product;

