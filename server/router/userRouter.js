const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/userCtrl')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)
router.get('/logout', userCtrl.logout)
router.get('/infor', auth, userCtrl.getUser)
router.get('/refresh_token', userCtrl.refreshtoken)

module.exports = router