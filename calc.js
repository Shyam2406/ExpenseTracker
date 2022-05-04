function add(a,b) {
    console.log(a+b);   
}

function sub(x,y){
    console.log(x-y);
}

function mul(x,y){
    console.log(x*y);
}

function div(x,y){
    console.log(x/y);
}


module.exports.addition = add
module.exports.sub = sub
module.exports.mul = mul
module.exports.div = div