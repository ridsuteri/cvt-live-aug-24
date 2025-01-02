const express = require('express')
const db = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const app = express();

app.use(express.json())

app.use('/users', userRoutes)
app.use('/auth', authRoutes)

app.get('/',(req, res)=>{
    res.send("Welcome to my api")
})

app.listen(3000, ()=>{
    console.log('App up and running !')
})