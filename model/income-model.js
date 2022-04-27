const mongoose =require("mongoose");

//schema

let IncomeSchema =new mongoose.Schema({
    Amount:{
        require: [true, "Income is Required"],
        type:String
    },

    Description:{
        type:String
    },

    Date:{
        type:Date,
        default: Date.now,
    },


    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
}
})

//model

let IncomeModel = mongoose.model("income",IncomeSchema) 

module.exports = IncomeModel