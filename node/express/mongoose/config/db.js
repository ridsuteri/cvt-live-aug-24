const mongoose = require('mongoose');

let db = mongoose.connect('mongodb://127.0.0.1:27017/cvt-users').then(()=>{
    console.log('Db connected successfully')
}).catch((err)=>{
    console.log('error connecting to db', err)
});


module.exports = db;