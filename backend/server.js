require('dotenv').config()
const server = require("./src/app");
const connectToDB = require('./src/db/db')

connectToDB()

server.listen(3000,()=>{
    console.log("server is running on port 3000")
})