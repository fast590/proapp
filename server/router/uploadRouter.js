const router = require('express').Router()
const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})


router.post('/upload', (req, res) => {
    try {
        console.log(req.files)
        if(!req.files || Object.keys(req.files).length ===0)
            res.json({msg:"File Upload"})
    } catch (err) {
        return res.status(400).json({msg: err.message})
    }
})


module.exports = router

