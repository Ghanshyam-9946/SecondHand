const express = require('express');
const Shoe = require('../models/shoe.sell'); 
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newShoe = new Shoe({
      shoeName: req.body.shoeName,
      shoeSize: req.body.shoeSize,
      gender: req.body.gender,
      sellingPrice: req.body.sellingPrice,
      shoeImages: req.body.shoeImages, 
      billImageUrl: req.body.billImageUrl,
    });

    const savedShoe = await newShoe.save();
    console.log('Shoe listing created successfully:', savedShoe);
    res.status(201).json(savedShoe);
    
  } catch (error) {
    console.error('Error creating listing:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const shoes = await Shoe.find().sort({ createdAt: -1 });
    res.status(200).json(shoes);
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const shoeId = req.params.id;
    const deletedShoe = await Shoe.findByIdAndDelete(shoeId);

    if (!deletedShoe) {
      return res.status(404).json({ message: 'Shoe listing not found.' });
    }
    res.status(200).json({ message: 'Listing deleted successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    if (!shoe) {
      return res.status(404).json({ message: 'Shoe not found' });
    }
    res.status(200).json(shoe);
  } catch (error) {
    console.error(`Error fetching shoe with ID ${req.params.id}:`, error);
    res.status(500).json({ message: 'Server error' });
  }
});
module.exports = router;