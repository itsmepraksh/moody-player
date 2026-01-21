const express = require("express");
const {profileController} = require("../controller/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router()

router.get("/profile",authMiddleware,profileController)


module.exports = router;