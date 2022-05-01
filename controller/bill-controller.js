const BillModel = require("../model/bill-model")


module.exports.addBill=function (req,res){
    //db insert role

    console.log(req.body. billName);
    console.log(req.body. billCategoryName);
    

    let bill = new BillModel({
        billName:req.body. billName,
        billAmount:req.body. billAmount,
        billCategoryName:req.body. billCategoryName,
        billDueDate:req.body. billDueDate,
        user:req.body.userId
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

// get by _id

module.exports.getById = function(req,res){

    let billId = req.params.billId
    //REST 
    BillModel.findById({ _id: billId},function(err,bill){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Your Bill is..",status:200,data:bill})

        }

    })

}

// fetch data like Table Format
module.exports.getByUserIdTable = function(req,res){

    let userId = req.params.userId;
    
    //REST 
    BillModel.find({user:userId},function(err,bill){
        if(err){
            console.log(err)
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"My TableWise Bill is...",status:200,data:bill})

        }

    })

}


// For Calculate Total Bill Amount like 100+200=300

module.exports.getByUserId = function(req,res){

    let userId = req.params.userId;
    /* console.log(userId); */
    
    //REST 
    BillModel.find({user:userId},function(err,bill){
        if(err){
            
            res.json({msg:"Something went wrong!!!",status:-1,databill:err})
        }else{
            let totalBill = 0; 
            console.log(totalBill)
           
            for(let i=0;i<bill.length;i++){
                totalBill = totalBill +  parseInt(bill[i].billAmount)
            }
            res.json({msg:"My Total Bill Amount is..",status:200,databill:totalBill})

        }

    })

}

// count 
module.exports.getTotalBill = function(req,res){

    
    let userId = req.params.userId
    //REST 
    BillModel.find({user:userId},function(err,bill){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,databillcount:err})
        }else{
            res.json({msg:"Your Bill is..",status:200,databillcount: bill.length})

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

     
    let billId = req.params.billId 
    let billName =req.body. billName
    let billCategoryName =req.body.billCategoryName
    let billAmount = req.body.billAmount
    let billDueDate = req.body.billDueDate

    BillModel.updateOne({_id:billId},{billName:billName,billCategoryName:billCategoryName,billDueDate:billDueDate,billAmount:billAmount},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Bill Data Updated",status:200,data:data})
        }
    })

}

