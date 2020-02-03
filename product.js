const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  productName:  String,
  productPrice: Number
}, {versionKey: false })

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel