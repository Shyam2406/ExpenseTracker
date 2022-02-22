const BillModel = require("../model/bill-model")


module.exports.addBill=function (req,res){
    //db insert role

    console.log(req.body. billName);
    console.log(req.body. billCategoryName);
    

    let bill = new BillModel({
        billName:req.body. billName,
        billCategoryName:req.body. billCategoryName,
        user:req.body.user
    })

    bill.save(function(err,success){
        if(err){
            // console.log(err)
            res.json({msg:"SMW", status:-1 ,data:req.body})
        }
        else{
            res.json({msg:"Bill added", status:200, data:success})
        }
    })
    
}

module.exports.getAllBill = function(req,res){
    //REST 
    BillModel.find(function(err,bill){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Your Bill is..",status:200,data:bill})

        }

    })

}

module.exports.deleteBill = function(req,res){
    let billId = req.params.billId

     
    BillModel.deleteOne({"_id":billId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

}


module.exports.updateBill = function(req,res){

     
    let billId =req.body.billId 
    let billName =req.body. billName
    let billCategoryName =req.body.billCategoryName

    BillModel.updateOne({_id:billId},{billName:billName,billCategoryName:billCategoryName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}