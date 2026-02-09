
const express = require('express')
const cors = require('cors')
const path =require('path')
const app = express()
const songRoute = require('./routes/song.route')
const authRoute = require('./routes/auth.route')
const userRoute = require('./routes/user.route')
const cookieParser = require('cookie-parser')
const authMiddleware = require('./middleware/auth.middleware')

app.use(cors({
    origin: process.env.FRONTEND_ORIGIN,
    methods : ["GET","POST","PATCH","DELETE"],
    credentials : true
}))

// console.log(process.env.FRONTEND_ORIGIN)

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'../public')));

app.get("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})


// app.get('/',authMiddleware,(req,res)=>{
//     res.send("kanhaji ye work kar raha hai...")
// })

app.use('/auth',authRoute)
app.use('/songs',songRoute)
app.use('/users',userRoute)


module.exports = app