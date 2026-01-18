const express = require('express')
const songModel = require('../models/songs.model')

const multer = require('multer');
const uploadFile = require('../service/storage.service');

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router()

router.post('/addSongs', upload.single("audio"), async (req, res) => {

    const { songName, songMood } = req.body;
    

    try {

        const response = await songModel.find({ songName })

        if (!response) return res.status(409).json({
            message: "songs already exists"
        })

        const fileData = await uploadFile(req.file);

        const addSongs = await songModel.create({
            songName, songMood , songUrl : fileData.url
        })

        res.status(201).json({
            message: "song added successfully"
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message || "Internal server error"
        })
    }



})

router.get('/', (req, res) => {
    res.send("deklo kanhaji")
})

router.get('/fetchAllSongs', async (req, res) => {
    try {
        const response = await songModel.find();

        console.log(response)

        return res.status(200).json({
            message: "it found kanhaji"
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

router.post('/getSongs', async (req, res) => {
    const { mood } = req.body;

    console.log(mood)

    try {

        const response = await songModel.find({ songMood: mood })

        if (response.length === 0) return res.status(404).json({
            message: "song for current mood not found"
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
})

//pending
router.patch('/editSongs/:id', async (req, res) => {
    const songId = req.params.id;
    const { songMood, songName } = req.body;

    try {

        const songRes = await songModel.findByIdAndUpdate({ _id: songId }, {
            songName, songMood
        },
            { new: true })

        if (!songRes) return res.status(404).json({
            message: "song not found"
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
})

//pending
router.delete('/deleteSong/:id', async (req, res) => {

    const songId = req.params.id;

    try {

        const response = await songModel.findByIdAndDelete({ _id: songId })

        if (!response) return res.status(400).json({
            message: "failed to delete"
        })

        res.status(204).json({
            message: "song deleted successfully"
        })

    } catch (err) {
        res.status(500).json({
            message: err.message || "internal server error"
        })
    }
})

module.exports = router