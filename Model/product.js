const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    product_Name: {
        type:String
    },
    price:{
        type:Number
    },
    rating:{
        type:Number
    },
    product_image:{
        type:String
    },
    Category:{
        type:String
    },
    

})

const product = mongoose.model("Product", productSchema)

module.exports = product