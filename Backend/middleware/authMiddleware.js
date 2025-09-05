const jwt = require('jsonwebtoken')
const Users = require('../models/user')

exports.authMiddleware =(req,res,next)=>{
    const token = req.cookies.token 
    if(!token) return res.status(401).json({message:'Unauthorized'})
    try {
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        req.user= decoded
        next()
    } catch (error) {
        console.error(error)
        res.status(401).json({ message: 'Unauthorized' })
    }
}

exports.admin= (req,res,next) => {
    try {
        if(req.user && req.user.role  === 'admin') return next()
        return res.status(403).json({message:'Forbidden, Admins only'})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })

    }
}