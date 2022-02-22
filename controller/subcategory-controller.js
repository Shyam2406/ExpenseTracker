const SubcategoryModel = require("../model/subcategory-model")
const UserModel = require("../model/user-model")

//add
module.exports.addSubcategory = function(req,res) {

    let subcategoryName = req.body.subcategoryName
    let category = req.body.category

    let subcategory =new SubcategoryModel({
        subcategoryName:subcategoryName,
        category:category
    })
    subcategory.save(function (err,data){
        if(err){
            res.json({ msg: "SMW", data:err, status:-1})
        }else{
            res.json({msg: "Signup done", data:data, status:200})
        }
    })
}

//list
module.exports.getAllSubcategories = function (req,res){
    SubcategoryModel.find().populate("category").exec(function (err, data){
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })
        } else {
            res.json({ msg: "subcategories ret...", data: data, status: 200 })
        }
    })
}


//delete
module.exports.deleteSubcategory = function(req,res){
    //params Subcategoryid 
    let subcategoryId = req.params.subcategoryId //postman -> userid 

    SubcategoryModel.deleteOne({_id:subcategoryId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update 

module.exports.updateSubcategory = function(req,res){
     
    let subcategoryId = req.body.subcategoryId 
    let subcategoryName = req.body.subcategoryName
    

    SubcategoryModel.updateOne({_id:subcategoryId},{subcategoryName:subcategoryName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}