const Item = require('../models/item')

function index(req, res) {
  Item.find(function (err, items) {
    if (err) {
      console.log(err)
    } else {
      res.json(items)
    }
  })
}

function show(req, res) {
  let id = req.params.id
  Item.findById(id, function (err, item) {
    res.json(item)
  })
}

function create(req, res) {
  let item = new Item(req.body)
  item
    .save()
    .then((item) => {
      res.status(200).json({ item: 'item added successfully' })
    })
    .catch((err) => {
      res.status(400).send('adding new item failed')
    })
}

function update(req, res) {
  Item.findById(req.params.id, function (err, item) {
    if (!item) {
      res.status(404).send('data is not found')
    } else {
      item.item_description = req.body.item_description
      item.itemOptions = req.body.itemOptions
      item.item_size = req.body.item_size
      item.item_price = req.body.item_price

      item
        .save()
        .then((item) => {
          res.json('Item updated')
        })
        .catch((err) => {
          res.status(400).send('Update not possible')
        })
    }
  })
}

async function deleteOne(req, res) {
  try {
    let item = await Item.findByIdAndDelete({ _id: req.params.id })
    let newitemList = await Item.find({})
    res.status(200).json(newitemList)
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  deleteOne,
}
