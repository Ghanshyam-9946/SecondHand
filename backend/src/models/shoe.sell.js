const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  shoeName: { type: String, required: true },
  shoeSize: { type: Number, required: true },
  gender: { type: String, required: true },
  sellingPrice: { type: Number, required: true },
  shoeImages: { type: [String], required: true },
  billImageUrl: { type: String }, 
}, { timestamps: true });

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;