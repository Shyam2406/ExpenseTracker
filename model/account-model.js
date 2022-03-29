const mongoose =require("mongoose");

//schema

let AccountSchema =new mongoose.Schema({
    Balance:{
        type:String
    },

    CurrencyType:{
        type:String
    },

    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
}
})

//model

let AccountModel = mongoose.model("account",AccountSchema) 

module.exports = AccountModel