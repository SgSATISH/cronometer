
const jwt =require("jsonwebtoken")
require("dotenv").config()
const authentication =(req,res,next)=>{
    if(!req.headers.authorization){
        res.send("please login again")
    }
try{
    const user_token = req.headers?.authorization.split(" ")[1]

    jwt.verify(user_token,process.env.secret,function(err,decoded){
        if(err){
            return res.send("please login again")
        }
        req.body.email=decoded.email;
        req.body.userId=decoded.userId;
        next()
    })
}catch{
    res.send("error in authentication")
}

}

module.exports =authentication