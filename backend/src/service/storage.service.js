const { ImageKit } = require("@imagekit/nodejs")

var imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

async function uploadFile(file) {
    return await imagekit.files.upload({
        file:file.buffer.toString("base64"),
        fileName : "hello-cohort",
        folder:"songs-cohort"
    });
}

module.exports = uploadFile