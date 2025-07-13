const express = require('express');
const router = express.Router();

// 🔐 Mock user data
const users = [
  { username: 'dara', password: 'pass123' },
  { username: 'admin', password: 'secret' }
];

// ✅ Respond to GET /login
router.get('/', (req, res) => {
  res.status(200).send('Login Page');
});


// 🔐 POST /login - basic login logic
router.post('/', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;