const express = require('express');
const connectDB = require('./Config/Db.js');
const setHeaders = require('./Middlewares/Header.js');
const allowCors = require('./Middlewares/Cors.js');
const errorHandler = require('./Middlewares/ErrorHandler.js');
const asyncHandler = require('./Middlewares/AsyncHandler.js');
const setupSwagger = require('./swagger');
const authRouter = require('./Routes/AuthRouter.js');
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

app.use('/api/auth', asyncHandler(authRouter));

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
