const express = require('express');
const connectDB = require('./Config/Db.js');
const authRouter = require('./Routes/AuthRouter.js');
const productRouter = require('./Routes/ProductRouter.js');
const customerRouter = require('./Routes/CustomerRouter.js');
const setHeaders = require('./Middlewares/Header.js');
const allowCors = require('./Middlewares/Cors.js');
const errorHandler = require('./Middlewares/ErrorHandler.js');
const asyncHandler = require('./Middlewares/AsyncHandler.js');
const orderRouter = require('./Routes/OrderRouter.js');
const setupSwagger = require('./swagger');
const discountRouter = require('./Routes/DiscountRouter');
const reviewRouter = require('./Routes/ReviewRouter');
const csvRouter = require('./Routes/CsvRouter');

require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use custom headers middleware
app.use(setHeaders);

// Use CORS middleware
app.use(allowCors);

// Setup Swagger documentation
setupSwagger(app);

// Define routes
app.use('/api/auth', asyncHandler(authRouter));
app.use('/api/products', asyncHandler(productRouter));
app.use('/api/customers', asyncHandler(customerRouter));
app.use('/api/orders', asyncHandler(orderRouter));
app.use('/api/discounts', asyncHandler(discountRouter));
app.use('/api/reviews', asyncHandler(reviewRouter));
app.use('/api/csv', asyncHandler(csvRouter));

// Error handling middleware should be the last middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
