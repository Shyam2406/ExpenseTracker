const mongoose =require("mongoose");

//schema

let ExpenseSchema =new mongoose.Schema({
    ExpenseName:{
        type:String
    },

    ExpenseAmount:{
        type:Number
    },

    PaymentMethod :{
        type:String
    },

    ExpenseDetails:{
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

let ExpenseModel = mongoose.model("expense",ExpenseSchema) 

module.exports = ExpenseModel