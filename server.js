if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const DARKSKY_API_KEY= process.env.DARKSKY_API_KEY
const express = require('express')
const app = express()

app.use(express.json())
app.use(expresss.static('public'))