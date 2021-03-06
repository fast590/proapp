const Users = require('../model/usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const userCtrl = {
    register: async (req, res) => {
        const {name, email, password} = req.body;
        const user = await Users.findOne({email:email})
      
        if(user) 
            return res.status(400).json({msg: "The email already exists"})
        
        if(password.length < 3) 
            return res.status(400).json({msg: "Password should be at least 3 letters"})

        //password encryption
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new Users({
            name, email, password: passwordHash
        })

        // save new user
        await newUser.save()

        const accessToken = createAccessToken({id:newUser._id})
        const refreshToken = createRefreshToken({id:newUser._id})

        res.cookie('refreshToken',refreshToken, {
            httpOnly: true,
            path: 'user/refresh_token'
        })

        res.status(200).json(accessToken)
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg: 'User does not exit!'})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg:'Incorrect Password!'})

            const accessToken = createAccessToken({id:user._id})
            const refreshToken = createRefreshToken({id:user._id})

            res.cookie('refreshToken',refreshToken, {
                httpOnly: true,
                path: 'user/refresh_token'
            })
            res.json(accessToken)

        } catch (err) {
            return res.status(500).json({errmsg:err.message})
        }
    },
    logout: (req, res) => {
        try {
            res.clearCookie('refreshToken', {path: 'user/refresh_token'})
            res.json({msg: 'Logged out'})
        } catch (err) {
            return res.status(500).json({errmsg:err.message})
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg:"User does not exist"})
            
            res.json(user)
        } catch (err) {
            return res.status(500).json({errmsg:err.message})
        }
    },
    refreshtoken: (req, res) => {
        const rf_token = req.cookies.refreshToken
        if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if(err) return res.status(400).json({msg: "Please Login or Register"})
            const accessToken = createAccessToken({id:user.id})
            res.json({user, accessToken})
        })
    }
}

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}
const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl