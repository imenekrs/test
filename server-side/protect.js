const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('./models/users')

const  protect = async (req,res,next)=>{
    const token = req.headers.authorization
    if(token && token.startsWith('Bearer'))
    try {
        const t = token.split(' ')[1]
        const u = await jwt.verify(t,process.env.JWT_KEY)
        req.user = await User.findOne({email:u})
      next()
    } catch (error) {
        res.status(401).send(error)
    }
     else{
        res.status(401).send('not authorized')
     }
    
}

module.exports = protect