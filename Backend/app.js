require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// Database
connectDB()

app.use('/api/auth',require('./routes/authRoutes'))

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})