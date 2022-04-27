const IncomeModel = require("../model/income-model")






// IncomdeModel.find({user:req.params.userId},function(err,data){
    //data 
//})

module.exports.addIncome = function (req,res){
    //db insert role

    console.log(req.body.Amount);
    console.log(req.body.Description);
    

    let income = new IncomeModel({
        Amount:req.body.Amount,
        Description:req.body.Description,
        Date: req.body.Date,
        user:req.body.userId
    })

    income.save(function(err,success){
        if(err){
            // console.log(err)
            res.json({msg:"Some Error!!!", status:-1 ,data:req.body})
        }
        else{
            res.json({msg:"Money added", status:200, data:success})
        }
    })
    
}

module.exports.getAllIncome = function(req,res){
    
   
    //REST 
    IncomeModel.find(function(err,income){
        if(err){
            
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Users Income is..",status:200,data:income})

        }

    })

}

// Get by id

module.exports.getByIdIncome = function(req,res){

    let incomeId = req.params.incomeId;
    //REST 
    IncomeModel.findById({_id:incomeId},function(err,income){
        if(err){
            
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Account is..",status:200,data:income})

        }

    })

}

module.exports.getByUserId = function(req,res){

    let userId = req.params.userId;
    /* console.log(userId); */
    
    //REST 
    IncomeModel.find({user:userId},function(err,income){
        if(err){
            
            res.json({msg:"Something went wrong!!!",status:-1,dataincome:err})
        }else{
            let totalIncome = 0; 
            console.log(income)

            for(let i=0;i<income.length;i++){
                totalIncome = totalIncome +  parseInt(income[i].Amount)
            }
            res.json({msg:"my Income is..",status:200,dataincome:totalIncome})

        }

    })

}

//by userid and fetch inserted record like table wise
module.exports.getByIduserIncome = function(req,res){

    let userId = req.params.userId
    
    //REST 
    IncomeModel.find({user:userId},function(err,income){
        if(err){
            
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Account record tablewise is..",status:200,data:income})

        }

    })

}

module.exports.deleteIncome = function(req,res){
    let incomeId = req.params.incomeId;

     
    IncomeModel.deleteOne({"_id":incomeId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

}


module.exports.updateIncome = function(req,res){

     
    let incomeId =req.body.incomeId
    let Amount = req.body.Amount
    let Description = req.body.Description
   
    

    IncomeModel.updateOne({_id:incomeId},{Amount:Amount,Description:Description},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Income Detail updated...",status:200,data:data})
        }
    })

}

// passing through url income update
module.exports.updateById = function(req,res){

     
    let incomeId =req.params.incomeId
    let Amount = req.body.Amount
    let Description = req.body.Description
   
    

    IncomeModel.updateOne({_id:incomeId},{Amount:Amount,Description:Description},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Income Detail updated...",status:200,data:data})
        }
    })

}