const fs = require("fs")
const express = require("express")
const app = express()
const mongoose = require("mongoose")


//middle ware

app.use(express.json())//read mobile and iphone data
app.use(express.urlencoded ({extended:true}))

const incomeController = require("./controller/income-controller")
const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const categoryController = require("./controller/category-controller")
const subcategoryController= require("./controller/subcategory-controller")
const billController = require("./controller/bill-controller")
const expenseController = require("./controller/expense-controller")
const contactusController = require("./controller/contactus-controller")

//for front end connection error solving
var cors = require('cors')
const ContactusModel = require("./model/contactus-model")
app.use(cors())

//database
mongoose.connect('mongodb://localhost:27017/expensetracker',function(err){
    if(err){
        console.log("db fail...");
    }else{
        console.log("db coonect");
    }
    
})

//url pages
app.get("/signup",function(req,res){
    let signupHtml = fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
    //res.write("Welcome shyam")
    res.end()
})

app.get("/login",function(req,res){
    let loginHtml = fs.readFileSync("./views/login.html")
    res.write(loginHtml)
    //res.write("Welcome shyam")
    res.end()
})

//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.put("/roles",roleController.updateRole)
app.delete("/roles/:roleId",roleController.deleteRole)


//user 
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.get("/users/:userId",userController.getByIdUsers)
app.get("/usertotal",userController.getTotalUser)
/* app.put("/users",userController.updateUser) */
// by id users
app.put("/users/:userId",userController.updateByUserId)
//update User by Url Id
app.delete("/users/:userId",userController.deleteUser)
//login validation by user
app.post("/login",userController.login)



//User Income
app.post("/incomes",incomeController.addIncome)
app.get("/incomes",incomeController.getAllIncome)
app.get("/incomes/:incomeId",incomeController.getByIdIncome)

app.put("/incomes",incomeController.updateIncome)

//update by passing id 
app.put("/incomes/:incomeId",incomeController.updateById)

/* showing data like first roe ,second row etc.... */
//get data of user id (not total)
app.get("/incomestablewise/:userId",incomeController.getByIduserIncome)

// get by userId
app.get("/incomesbyuser/:userId",incomeController.getByUserId)
app.delete("/incomes/:incomeId",incomeController.deleteIncome)



//Personal Bill
app.post("/bills",billController.addBill)
app.get("/bills",billController.getAllBill)
app.put("/bills/:billId",billController.updateBill)
// get bill by _id
app.get("/bills/:billId",billController.getById)
app.get("/billsbyuser/:userId",billController.getByUserId)
/* app.get("/bills/:billId",billController.getTotalBill) */
// fetch data like table format
//table data
app.get("/billofusertablewise/:userId",billController.getByUserIdTable)
//user id
app.get("/billsCountTotal/:userId",billController.getTotalBill)
//delete
app.delete("/bills/:billId",billController.deleteBill)



//User Expense
app.post("/expenses",expenseController.addExpense)
app.get("/expenses",expenseController.getAllExpense)
app.get("/expenses/:expenseId",expenseController.getById)
app.put("/expenses",expenseController.updateExpense)
// Get Total Expenses
app.get("/expensesbyuser/:userId",expenseController.getByUserId)
/* showing data like first roe ,second row etc.... */
//get data of user id (not total)
app.get("/expensestablewise/:userId",expenseController.getDataByUserIdTable)
// error 
app.put("/expenses/:expenseId",expenseController.updateExpenseById)

app.delete("/expenses/:expenseId",expenseController.deleteExpense)


//Contactus
app.post("/contactus",contactusController.addMessage)
app.get("/contactus",contactusController.getAllMessage)
app.get("/TotalQueryMessage",contactusController.getTotalQuery)
app.put("/contactus",contactusController.updateMessage)
app.delete("/contactus/:contactId",contactusController.deleteMessage)


//category
app.post("/categories",categoryController.addCategories)
app.get("/categories",categoryController.getAllCategories)
app.delete("/categories/:categoryId",categoryController.deleteCategory)
app.put("/categories",categoryController.updateCategory)

//subcategory
app.post("/subcategories",subcategoryController.addSubcategory)
app.get("/subcategories",subcategoryController.getAllSubcategories)
app.delete("/subcategories/:subcategoryId",subcategoryController.deleteSubcategory)
app.put("/subcategories",subcategoryController.updateSubcategory)


//from html page to database
app.get("/login",sessionController.login)
app.post("/signup",sessionController.signup)
app.post("/savedata",sessionController.savedata)

app.listen(5000,function(){
    console.log("NodeJs Server Started on 5000")
})
