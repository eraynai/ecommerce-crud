const mongoose = require('mongoose')
const Schema = mongoose.Schema

let itemSchema = new Schema({
  item_description: {
    type: String,
  },
  itemOptions: {
    type: String,
  },
  item_size: {
    type: String,
  },
  item_price: {
    type: String,
  },
})

let ItemModel = mongoose.model('Item', itemSchema)

module.exports = ItemModel
