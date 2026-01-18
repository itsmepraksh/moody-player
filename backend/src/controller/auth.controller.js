const userModel = require("../models/user.model")
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')


const loginController = async (req, res) => {



}

const logoutController = async (req, res) => {

}

const registerController = async (req, res) => {

    const { fullName, email, password, userRole } = req.body

    try {

        const isExist = await userModel.findOne({ email })

        if (isExist) return res.status(409).json({
            message: "Email is already register, try again"
        })

        const userResponse = await userModel.create({
            fullName, email, password, userRole
        })

        if (!userResponse) return res.status(400).json({
            message: "something got wrong"
        })

        const token = jwt.sign({ id: userResponse._id }, process.env.JWT_SECRET)

        req.cookie("token", token)

        //for secure road 
        // req.cookie("token", token, {
        //     httpOnly: true, secure: true
        // })





        res.status(201).json({
            message: "user register successfully"
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message || "Internal Server Error"
        })
    }
}


module.exports = { loginController, registerController, loginController }