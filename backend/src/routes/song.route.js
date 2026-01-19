const express = require('express')

const multer = require('multer');

const {
    fetchAllSongsController,
    getSongsByMoodController,
    editSongController, 
    deleteSongController, 
    addSongController, 
    getSongByIdController
} = require('../controller/song.controller');

const authMiddleware = require('../middleware/auth.middleware');

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router()

router.get('/', (req, res) => {
    res.send("deklo kanhaji")
})

router.get('/fetchAllSongs', fetchAllSongsController)

router.post('/getSongsByMood' ,getSongsByMoodController)

router.get('/:id', authMiddleware, getSongByIdController)

router.post('/addSongs',authMiddleware, upload.single("songUrl"), addSongController)

router.patch('/editSongs/:id', authMiddleware, upload.single("songUrl"), editSongController)

router.delete('/deleteSong/:id', authMiddleware, deleteSongController)

module.exports = router