const mongoose = require("mongoose")


const songSchema =  new mongoose.Schema({
    songName : String,
    songMood : String,
    songUrl : String,
    songArtist : String,
    description : String,
})


const songModel = mongoose.model("songs",songSchema)

module.exports = songModel