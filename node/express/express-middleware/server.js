const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const PORT = 3000

const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
// for static file
app.use(express.static('./assets'));

const authMiddleware = (req, res, next)=>{
    console.log('touched a custom middleware')
    next();
}

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false,
}))
  

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/home.html`)
})

app.post('/login', (req, res)=>{
    const {username, password} = req.body
    if(username.trim() === "admin" && password.trim() === "@1234"){
        req.session.user = username;
        res.cookie.user = username
        res.redirect('/dashboard');
    }
    else{
        res.send('error logging in')
    }
})

app.get('/dashboard',authMiddleware, (req, res)=>{
    // console.log('incoming request>>', req.session);
    res.send('dashboard');
})

app.listen(PORT, ()=>{
    console.log(`⚡️Server is up & running on ${PORT}⚡️`)
})