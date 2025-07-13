const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'T-shirt', price: 20 },
  { id: 2, name: 'Shoes', price: 50 }
];

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
