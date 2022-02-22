function login(req,res){
    res.write("Login");
    res.end()
}

function signup(req,res){
    res.write("Signup");
    res.end()
}

function savedata(req,res){
    console.log(req.body)
    res.write("Save Data");
    res.end()
}

module.exports.login = login
module.exports.signup = signup
module.exports.savedata = savedata
