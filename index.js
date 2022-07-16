const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/route')
const Customer = require('./models/Customer')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
require('dotenv').config()

app.use(flash());

app.use(session({
  secret: 'my secret key',
  saveUninitialized: true,
  resave: false,
}))




const mongoDB = process.env.MONGO_URL
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use("", routes)
app.set('view engine', 'ejs')



db.once('open', (req, res)=>{
	app.listen(3000, ()=>{
		console.log("Loading")
	})
})

	