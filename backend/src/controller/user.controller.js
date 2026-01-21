


const profileController = async (req,res)=>{

    
    try {
        const user = req.user;

        res.status(200).json({
            message : "user data loaded successfully",
            data : user
        })
        
    } catch (err) {
        return res.status(500).json({
            message : err.message || "Internal Server Error"
        })
    }
}


module.exports = { profileController }