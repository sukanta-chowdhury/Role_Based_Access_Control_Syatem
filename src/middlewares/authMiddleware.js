const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token;
     // Extract the `Authorization` header from the request.
    let authHeader=req.headers.Authorization || req.headers.Authorization || req.headers.authorization;
    // Check if the `Authorization` header exists and starts with "Bearer".
    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ") [1];

        if(!token ){
            return res
            .status(401)
            .json({ message: "No token , authorization denied"});
        }
        try{
             // Verify the token using the secret key from environment variables.
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user= decode;
            console.log("The decode user is :", req.user);
            next();

        }catch(err) {
            res.status(400).json({message: "Token is not valid"});
        }
    } else {
         // If no `Authorization` header is found, send a 401 Unauthorized response.
        return res.status(401).json({message: "No token , authorization denied"});
    }
};

module.exports=verifyToken;