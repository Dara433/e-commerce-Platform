const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

// Setup app instance
const app = express();
app.use(bodyParser.json());

// Import and register routes
const productRoutes = require('.api/routes/products');
const loginRoutes = require('.api/routes/Login');
const orderPageRoutes = require('.api/routes/OrderPage');

app.use('/products', productRoutes);
app.use('/login', loginRoutes);
app.use('/orders', orderPageRoutes);

// ✅ Actual tests
describe('API Route Tests', () => {
  test('GET /products responds with 200', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
  });

  test('GET /login responds with 200', async () => {
    const res = await request(app).get('/login');
    expect(res.statusCode).toBe(200);
  });

  test('GET /orders responds with 200', async () => {
    const res = await request(app).get('/orders');
    expect(res.statusCode).toBe(200);
  });
});
