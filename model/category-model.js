const mongoose =require("mongoose");

//schema

let CategorySchema =new mongoose.Schema({
    categoryName:{
        type:String
    },
    categoryDetail:{
        type:String
    },
})

//model

let CategoryModel = mongoose.model("category",CategorySchema) 

module.exports = CategoryModel