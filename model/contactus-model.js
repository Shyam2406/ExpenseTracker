const mongoose =require("mongoose")

//schema

let ContactusSchema =new mongoose.Schema({
    Name:{
        require: [true, "User Name is Required"],
        type:String
    },

    email:{
        require: [true, "Email is Required"],
        type:String
    },

    Description:{
        require: [true, "Message is Required"],
        type:String
    },

    Date:{
        type:Date,
        default: Date.now,
    }

   
})

//model

let ContactusModel = mongoose.model("contactus",ContactusSchema) 

module.exports = ContactusModel