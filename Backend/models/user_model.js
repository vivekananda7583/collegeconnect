import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    collegename:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    projects:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Projects'
    }
});
export const User=mongoose.model('User',userSchema);