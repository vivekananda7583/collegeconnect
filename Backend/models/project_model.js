import mongoose from mongoose

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true,
    },
    positions:{
        type:String,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }
})
export const Projects=mongoose.model('Projects',projectSchema);