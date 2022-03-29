const ExpenseModel = require("../model/expense-model")


module.exports.addExpense = function (req,res){
    //db insert role

    console.log(req.body.ExpenseName);
    console.log(req.body.ExpenseDetails);
    

    let expense = new ExpenseModel({
        ExpenseAmount:req.body.ExpenseAmount,
        ExpenseName:req.body.ExpenseName,
        PaymentMethod:req.body.PaymentMethod,  
        ExpenseDetails:req.body.ExpenseDetails,
        user:req.body.user
    })

    expense.save(function(err,success){
        if(err){
            // console.log(err)
            res.json({msg:"Some Error!!!", status:-1 ,data:req.body})
        }
        else{
            res.json({msg:"Expense added", status:200, data:success})
        }
    })
    
}

module.exports.getAllExpense = function(req,res){
    //REST 
    ExpenseModel.find(function(err,expense){
        if(err){
            
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Your Expense is..",status:200,data:expense})

        }

    })

}

module.exports.deleteExpense = function(req,res){
    let expenseId = req.params.expenseId

     
    ExpenseModel.deleteOne({"_id":expenseId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

}


module.exports.updateExpense = function(req,res){

     
    let expenseId =req.body.expenseId
    let ExpenseAmount =req.body.ExpenseAmount
    let PaymentMethod =req.body.PaymentMethod
    let ExpenseName =req.body.ExpenseName
    let ExpenseDetails =req.body.ExpenseDetails 
    

    ExpenseModel.updateOne({_id:expenseId},{ExpenseName:ExpenseName,ExpenseAmount:ExpenseAmount,PaymentMethod:PaymentMethod,ExpenseDetails:ExpenseDetails},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}