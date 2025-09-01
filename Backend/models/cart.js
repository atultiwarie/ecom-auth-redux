const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    items:[{
        product:{
            type:mongoose.Schema.ObjectId,
            ref:'Product'
        },
        quantity:{
            type:Number,
            required:true,
            min:[1,'Quantity can not be less than 1'],
            default:1
        },
        totalPrice:{
            type:Number,
            required:true,
            default:0
        }
    }]
},{timestamps:true})


module.exports = mongoose.model('Cart',cartSchema)