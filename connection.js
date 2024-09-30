const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogDB").then(()=>{
    console.log('Connection Established')
}).catch(()=>{
    console.log('Connection to DB Failed')
})