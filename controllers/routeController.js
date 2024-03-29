//when this route comes go to this file and when that route comes go to this file
//routes will go by INDUCES top to bottom, index,new,delete,create,edit,show
const express = require('express')
const router = express.Router()
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')

// Index
router.get('/', dataController.index, viewController.index)
//New
router.get('/new', viewController.new)
// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// Update
router.put('/:id', dataController.update, viewController.redirectShow)
// Create
router.post('/', dataController.create, viewController.redirectHome)
// Edit
router.get('/:id/edit', dataController.show, viewController.edit)
// Show
router.get('/:id', dataController.show, viewController.show)
//Buy
router.patch('/:id', dataController.buy, viewController.redirectShow)
// export router
module.exports = router