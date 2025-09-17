

const jwt = require("jsonwebtoken");

const auth = (req,res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            return res.status(401).json ({ message :"Unauthorized"});
        }

        const verifyUser = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verifyUser;
        next();
    } catch(err){
        res.status(500).json({ message: "Unauthorized "});
    }
};

module.exports = auth;