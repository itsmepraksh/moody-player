const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const loginController = async (req, res) => {

    const {email , password} = req.body

    try {
        const isUser = await userModel.findOne({email}) ;

        if(!isUser) return res.status(401).json({
            message : "Email or Password gone wrong"
        })

        const isPassword = bcrypt.compare(isUser.password,password)

        if(!isPassword) return res.status(401).json({
            message : "Email or Password gone wrong"
        })

        const token = jwt.sign({id:isUser._id},process.env.JWT_SECRET)

        res.cookie("token",token)

        res.status(200).json({
            message : "login successfully"
        })


    } catch (err) {
        return res.status(500).json({
            message : err.message | "Internal Server Error"
        })
    }

}

const logoutController = async (req, res) => {
    try {
        
        res.clearCookie("token",{
            httpOnly:true,
            secure : true,
            sameSite : "none"
        })

        res.status(200).json({
            message : "logout successfully"
        })
    } catch (err) {
        return res.status(500).json({
            message : err.message |  "Internal Server Error"
        })
    }
}

const registerController = async (req, res) => {

    const { fullName, email, password, userRole } = req.body

    try {

        const isExist = await userModel.findOne({ email })

        if (isExist) return res.status(409).json({
            message: "Email is already register, try again"
        })

        const userResponse = await userModel.create({
            fullName, email, 
            password : await bcrypt.hash(password,10),
            userRole
        })

        if (!userResponse) return res.status(400).json({
            message: "something got wrong"
        })

        const token = jwt.sign({ id: userResponse._id }, process.env.JWT_SECRET)

        res.cookie("token", token)

        //for secure road 
        // req.cookie("token", token, {
        //     httpOnly: true, secure: true
        // }) 

        res.status(201).json({
            message: "user register successfully"
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message | "Internal Server Error"
        })
    }
}

const deleteAcController = async (req,res)=>{

    const accountId = req.params.id;
    try {

        const isUser = await userModel.findByIdAndDelete(accountId)

        if(!isUser) return res.status(404).json({
            message : "account not found"
        })

        res.status(200).json({
            message : "account deleted successfully"
        })
        
    } catch (err) {
        return res.status(500).json({
            message : err.message | "Internal Server Error"
        })
    }
}


module.exports = { loginController, registerController, logoutController , deleteAcController}