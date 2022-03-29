const AccountModel = require("../model/account-model")


module.exports.addAccount = function (req,res){
    //db insert role

    console.log(req.body.Balance);
    console.log(req.body.CurrencyType);
    

    let account = new AccountModel({
        Balance:req.body.Balance,
        CurrencyType:req.body.CurrencyType,
        user:req.body.user
    })

    account.save(function(err,success){
        if(err){
            // console.log(err)
            res.json({msg:"Some Error!!!", status:-1 ,data:req.body})
        }
        else{
            res.json({msg:"Account added", status:200, data:success})
        }
    })
    
}

module.exports.getAllAccount = function(req,res){
    //REST 
    AccountModel.find(function(err,account){
        if(err){
            
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Account is..",status:200,data:account})

        }

    })

}

module.exports.deleteAccount = function(req,res){
    let accountId = req.params.accountId

     
    AccountModel.deleteOne({"_id":accountId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

}


module.exports.updateAccount = function(req,res){

     
    let accountId =req.body.accountId
    let Balance =req.body.Balance
    let CurrencyType =req.body.CurrencyType
     
    

    AccountModel.updateOne({_id:accountId},{Balance:Balance,CurrencyType:CurrencyType},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Account Detail updated...",status:200,data:data})
        }
    })

}