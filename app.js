const express = require('express');
const mongoose = require('mongoose');
const { handleErrors } = require('./middleware/errorMiddleware');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const db = require('./config/database');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use(handleErrors);

const PORT = process.env.PORT || 3000;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
