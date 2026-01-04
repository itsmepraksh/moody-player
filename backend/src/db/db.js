const mongoose = require("mongoose")


function connectToDB(){
    return mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("connected to DB")
    }).catch(()=>{
        console.error("failed to connect DB")
    })
}

module.exports = connectToDB