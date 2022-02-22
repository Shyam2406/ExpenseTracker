const mongoose =require("mongoose")

let SubcategorySchema = new mongoose.Schema({
   
    subcategoryName:{
        type:String
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    isActive: {
        type:Boolean
    }
})

let SubcategoryModel = mongoose.model("subcategory",SubcategorySchema)
module.exports = SubcategoryModel