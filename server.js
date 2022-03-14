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

//index route
// app.get('/plants', function (req, res) {
//   Plant.find({}, (error, allPlants) => {
//     res.render('Index', {
//       plants: allPlants
//     })
//   })
// })

// //seed 
// app.get('/plants/seed', (req, res) => {
//     Plant.create([
//         {
//             name: 'pothoss',
//             type: 'vine',
//             care: 'bright, indirect light and allow soil to dry between waterings.',
//             img: 'https://www.thejunglecollective.com.au/wp-content/uploads/2020/03/Pothos-Marble-Queen.jpg',
//             price: 7.55,
//             qty: 10,
//             petSafe: false
//         }
//     ], (err, data)=>{
//         res.redirect('/plants')
//     })
// })

//show route 
app.get('/plants/:id', function(req, res){
  Plant.findById(req.params.id, (err, foundPlant)=>{
    res.render('Show', {plant:foundPlant})
  })
})

//connect to mongo database
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo')
// })

app.listen(PORT, () => {
  console.log('listening')
})

