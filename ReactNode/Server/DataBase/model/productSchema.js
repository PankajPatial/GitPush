import mongoose from "mongoose";
// import { stringify } from "querystring";
// import { object } from "webidl-conversions";

const ProductSchema=new mongoose.Schema({
    id:String,
    url:String,
    detailurl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline: String,

});

const ProductModel=mongoose.model('Product',ProductSchema);

export default ProductModel;