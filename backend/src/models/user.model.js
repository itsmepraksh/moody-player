const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    fullName :{
        type :String , 
        required:true,
        minlength : 5
    },
    email : {
        type : String,
        required: true ,
        minlength : 13
    },
    password : {
        type:String,
        required : true,
        minlength : 8
    },
    userRole:{
        type:String,
        required : true,
        enum : ['ADMIN','USER'],
        default : 'USER'
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel