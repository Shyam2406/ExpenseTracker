const mongoose =require("mongoose");

//schema

let ExpenseSchema =new mongoose.Schema({
    ExpenseName:{
        type:String
    },

    ExpenseDetails:{
        type:String
    },

    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
}
})

//model

let ExpenseModel = mongoose.model("expense",ExpenseSchema) 

module.exports = ExpenseModel