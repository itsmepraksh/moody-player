const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

const authMiddleware = async (req,res,next) => {
    
    try {
        const isToken = req.cookies.token

        if(!isToken) return res.status(401).json({
            message : "unauthorized access, login first"
        })

        const decoded = jwt.verify(isToken,process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.id).select("-password -__v")

        if(!user) return res.status(404).json({
            message : "user not found"
        })

        req.user = user

        next()
        
        
    } catch (err) {
        return res.status(500).json({
            message : err.message || "Internal server error"
        })
    }
}

module.exports = authMiddleware