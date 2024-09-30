const mongoose=require("mongoose");
const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    blogdate:{
        type:Date,
        default:Date.now
    }
});


const blogData=mongoose.model('blogdb',blogSchema)
module.exports=blogData
