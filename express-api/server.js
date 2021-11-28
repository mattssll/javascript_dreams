require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true,  useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json()) // parser middleware from express

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

const port = 3005
app.listen(port, () => console.log("Server Started"))
