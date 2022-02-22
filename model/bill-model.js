const mongoose =require("mongoose");

//schema

let BillSchema =new mongoose.Schema({
    billName:{
        type:String
    },

    billCategoryName:{
        type:String
    },

    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
}
})

//model

let BillModel = mongoose.model("bill",BillSchema) 

module.exports = BillModel