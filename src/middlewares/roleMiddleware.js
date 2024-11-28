const authorizeRoles =(...allowedRoles) =>{
    // Return a middleware function that performs the authorization check.
    return (req, res, next) => {
        // Check if the user's role (stored in `req.user.role`) is included in the allowed roles.
        if(!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied"});
        }
        next();
    };
};

module.exports = authorizeRoles;