const express = require('express');
const cors = require('cors');
const shoeRoutes = require('./routes/shoe.routes');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api/shoes', shoeRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the SecondHand API');
}
);
module.exports = app;