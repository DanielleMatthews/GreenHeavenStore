const Plant = require('../models/plants.js')

const dataController = {
  index(req, res, next){
    Plant.find({}, (err, allPlants) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      }else {
        res.locals.data.plants = allPlants
        next()
      }
    })
  },
  create(req, res, next){
    req.body.petFriendly = req.body.petFriendly === "on" ? true : false;
    Plant.create(req.body, (err, createdPlant) => {
        if(err){
          res.status(404).send({
            msg: err.message
          })
        }else {
          res.locals.data.plant = createdPlant
          next()
        }
    })
  },
  show(req, res, next){
    Plant.findById(req.params.id, (err, foundPlant)=>{
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.plant = foundPlant
        next()
      }
    })
  },
  update(req, res, next){
    req.body.petFriendly = req.body.petFriendly === "on" ? true : false;
    Plant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPlant) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.plant = updatedPlant
        next()
      }
    })
  },
  destroy(req, res, next){
    Plant.findByIdAndRemove(req.params.id, (err, plant) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.plant = plant
        next()
      }
    })
  },
  buy(req, res, next){
    Plant.findByIdAndUpdate(req.params.id, { $inc: {qty: -1 } }, {new: true }, (err, decQty) => {
      if (err) {
      res.status(404).send({
        msg: err.message
      })
      } else {
      res.locals.data.plant = decQty
      next()
      }
    })
  }
}

module.exports = dataController