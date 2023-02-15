import mongoose from "mongoose"
// import { Connection } from "mongoose";

const URL='mongodb://localhost:27017/MyFirstProject';
export const Connection =async()=>{
     try{
       await new mongoose.connect(URL)
        console.log("DataBase Connected Successfuly");
    }
    catch(err){
    console.log("Error while connecting With database");
    }
}

// export const Connection = ()=>{
//     new mongoose.connect(URL,{useUnifiedTopology: true ,useNewUrlParser:true, useCreateIndex:true,useFindAndModify:false})
//     .then(()=>console.log("successful"))
//     .catch((err)=>console.log("err"));
    
// }

 export default Connection;