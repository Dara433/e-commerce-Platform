const express = require('express');
const router = express.Router();

// 🧾 Mock order data
let orders = [
  { id: 1, user: 'dara', items: ['T-shirt', 'Shoes'], total: 70 }
];

// 🛒 GET /orders – fetch all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// 🛒 POST /orders – place a new order
router.post('/', (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    user: req.body.user,
    items: req.body.items,
    total: req.body.total
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});

module.exports = router;