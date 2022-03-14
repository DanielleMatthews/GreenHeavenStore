const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
    name: {type: String},
    type: {type: String},
    care: {type: String},
    img: {type: String},
    price: {type: Number},
    qty: {type: Number},
    petSafe: Boolean
})

const Plant = mongoose.model('Plant', plantSchema)

module.exports = Plant

