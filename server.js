const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const setHeaders = require("./middlewares/header");
const allowCors = require("./middlewares/cors.js");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use custom headers middleware
app.use(setHeaders);

// Use CORS middleware
app.use(allowCors);

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
