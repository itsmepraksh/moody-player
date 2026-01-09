
const express = require('express')
const cors = require('cors')
const app = express()
const songRoute = require('./routes/song.route')

app.use(cors({
    origin: process.env.FRONTEND_ORIGIN,
    methods : ["GET","POST","PATCH","DELETE"],
    credentials : true
}))

// console.log(process.env.FRONTEND_ORIGIN)

app.use(express.json())
app.use(express.urlencoded())


app.get('/',(req,res)=>{
    res.send("kanhaji ye work kar raha hai...")
})


app.use('/songs',songRoute)


module.exports = app