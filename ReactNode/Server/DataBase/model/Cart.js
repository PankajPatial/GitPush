import mongoose from "mongoose"


 const CartSchema = new mongoose.Schema({
    product_id:String,
    decription:String,
    quantity:Number,
    user_id:String,
    name:String,
    price:String,
}) 

const cartCollection = new mongoose.model('cartCollection',CartSchema)

export default cartCollection;