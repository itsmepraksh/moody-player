const songModel = require("../models/songs.model");
const uploadFile = require("../service/storage.service")


//empty controller
const songController = async (req, res) => {

}

const fetchAllSongsController = async (req, res) => {
    try {
        const response = await songModel.find();

        return res.status(200).json({
            message: "it found kanhaji",
            songs: response
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

const getSongsByMoodController = async (req, res) => {
    const { mood } = req.body;

    try {

        const response = await songModel.find({ songMood: mood })

        if (response?.length === 0) return res.status(404).json({
            message: "song not found for this mood "
        })

        res.status(200).json({
            message: "song found successfully",
            songs: response
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message || "Internal Server Error"
        })
    }
}

const editSongController = async (req, res) => {
    const songId = req.params.id;
    const { songMood, songName } = req.body;

    if (!songMood || !songName ) return res.status(400).json({
        message: "required all field data"
    })

    try {

        const fileDta = await uploadFile(req.file);

        const songRes = await songModel.findByIdAndUpdate({ _id: songId }, {
            songName, songMood, songUrl: fileDta.url
        },
            { new: true })

        if (!songRes) return res.status(404).json({
            message: "something got wrong, failed to update"
        })

        res.status(200).json({
            message: "song update successfully",
            song: songRes
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message || "Internal server error"
        })
    }
}

const deleteSongController = async (req, res) => {

    const songId = req.params.id;

    try {

        const response = await songModel.findByIdAndDelete({ _id: songId })

        if (!response) return res.status(400).json({
            message: "failed to delete"
        })

        res.status(200).json({
            message: "song deleted successfully"
        })

    } catch (err) {
        res.status(500).json({
            message: err.message || "internal server error"
        })
    }
}

const addSongController = async (req, res) => {

    const { songName, songMood } = req.body;

    if(!songName || !songMood) return res.status(400).json({
        message : "all fields are required"
    })


    try {

        const response = await songModel.find({ songName })

        if (!response) return res.status(409).json({
            message: "songs already exists"
        })

        const fileData = await uploadFile(req.file);

        const addSongs = await songModel.create({
            songName, songMood, songUrl: fileData.url
        })

        if(!addSongs) return res.status(400).json({
            message : "something go wrong, failed to add"
        })

        res.status(201).json({
            message: "song added successfully"
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message || "Internal server error"
        })
    }



}

const getSongByIdController = async (req, res) => {

    try {
        const songId = req.params.id;

        const song = await songModel.findById(songId)

        if (!song) return res.status(404).json({
            message: "song not found"
        })

        return res.status(200).json({
            message: "song fetched successfully",
            song: song
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message | "Internal server error"
        })
    }
}

module.exports = { songController, fetchAllSongsController, getSongsByMoodController, editSongController, deleteSongController, addSongController, getSongByIdController }