require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticator = (req, res, next) => {
    console.log(req.headers);
    try{
        const token = req.headers.authorization.split(" ")[1] || req.cookies?.token;
        console.log(token,"is the ok");
        jwt.verify(token,process.env.secret,(err,decoded)=>{
            if(err){
                res.status(403).send({isError:true,Msg:"You are not authorized"});
            }else{
                console.log(decoded);
                req.body.userId = decoded.userId;
                next()
            }
        })
    }catch(err){
        res.status(500).send(err);
    }
};

module.exports = {
    authenticator
}