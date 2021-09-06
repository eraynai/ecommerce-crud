var express = require('express')
var router = express.Router()
const itemCtrl = require('../../controllers/item')

router.get('/', itemCtrl.index)
router.get('/:id', itemCtrl.show)
router.post('/add', itemCtrl.create)
router.put('/update/:id', itemCtrl.update)
router.delete('/:id', itemCtrl.deleteOne)

module.exports = router
