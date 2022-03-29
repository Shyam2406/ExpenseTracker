const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    
    firstName :{
        type : String,
        require : true
    },

    lastName :{
        type : String,
        require : true
    },

    email :{
        type : String,
    },

    gender :{
        type : String,
    },

    password :{
        type : String,
    },

    role : {
            type:mongoose.Schema.Types.ObjectId,
            ref:"role"
    },

    isActive :{
        type : Boolean

    }
})


const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel 