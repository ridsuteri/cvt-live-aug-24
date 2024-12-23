const port = 3000
const express = require('express')
const users = require('./users.json');

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World (from express.js)')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

// API Endpoints
app.get('/api/users', (req, res)=>{
    res.status(200).json({data: users});
});

app.post('/api/users', (req, res)=>{
    console.log('received data', req.body)
    res.status(201).json({message:"user added successfully"})
});

app.put('/api/users/:username', (req, res)=>{

});

app.delete('/api/users/:username', (req, res)=>{

});

app.listen(port, (err) => {
    console.log(`Example app listening on port ${port}`)
})