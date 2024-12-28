
const express = require('express')
const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.use('/users', userRoutes)
app.use('/books', bookRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})