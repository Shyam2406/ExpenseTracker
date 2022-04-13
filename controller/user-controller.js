const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")


//add [ POST ]
// url http://localhost:5000/users
module.exports.addUser = function (req, res) {

    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password
    let gender = req.body.gender
    //encrypt 

    let encPassword = bcrypt.hashSync(password,10) //-->10 is display round..
    let role = req.body.role


    let user = new UserModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        password: encPassword,
        gender: gender,
        role: role
    })
    
    user.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "User Registration Success", data: data, status: 200 })//http status code 
        }
    })


}

//list
module.exports.getAllUsers = function (req, res) {

    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Some Error Occured", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "All Users is ...", data: data, status: 200 })//http status code 
        }
    })
}


//Login validation
//with login url
module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password  = req.body.password 

    let isCorrect = false; 

    UserModel.findOne({email:param_email},function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }

        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Login success....", data: data, status: 200 })//http status code 
        }
    })

}






/* //Login validation
//with login url
module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password  = req.body.password 

    let isCorrect = false; 

    UserModel.findOne({email:param_email}).populate('role').exec(function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }

        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Login success....", data: data, status: 200 })//http status code 
        }
    });

};

module.exports.Adminlogin = function(req,res){
    let id = '621320a1c1b8dd63c15075f2'
    let param_password  = req.body.password 

    let isCorrect = false; 

    UserModel.findOne({_id: id}).populate('role').exec(function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }

        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Admin Login success....", data: data, status: 200 })//http status code 
        }
    });

};
 */






//delete

module.exports.deleteUser = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    UserModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}


//update 

module.exports.updateUser = function(req,res){
        //update role set roleName = admin where roleId = 12121 
        let userId = req.body.userId 
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        let email  = req.body.email
        let password = req.body.password
        let gender = req.body.gender
    
        UserModel.updateOne({_id:userId},{firstName:firstName,lastName:lastName,email:email,password:password,gender:gender},function(err,data){
            if(err){
                res.json({msg:"Something went wrong!!!",status:-1,data:err})
            }else{
                res.json({msg:"updated...",status:200,data:data})
            }
        })
}