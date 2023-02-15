import { Schema } from "mongoose"
import Products from "../DataBase/Data.js"
import ProductModel from "./model/productSchema.js"

const DefaultData = async()=>{
    try{
      await  ProductModel.insertMany(Products);
       console.log("Collection created successfuly")
    }
    catch(err){
        console.log(' errr ::::::::::::::::: while inserting', err)
    }
}

export default DefaultData;