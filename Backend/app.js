require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const connectDB = require('./config/db')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Database
connectDB()

app.use()

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})