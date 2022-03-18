require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const Plant = require('./models/plants.js')
const PORT = process.env.PORT || 3000

const db = require('./models/db')
db.once('open', ()=> {
    console.log('connected to mongo')
})

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//middleware
app.use((req, res, next)=>{
    res.locals.data = {}
    next()
})

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/plants', require('./controllers/routeController.js'))

app.listen(PORT, () => {
  console.log('listening')
})

