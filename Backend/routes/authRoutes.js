const express = require("express");
const router= express.Router()
const {register, login, logout} = require("../controllers/authControllers")
const authMiddleware = require('../middleware/authMiddleware')

router.post('/register',register)
router.post('/login',login)
router.post('/logout',authMiddleware,logout)

module.exports = router