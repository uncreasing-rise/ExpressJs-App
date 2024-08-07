const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI; // Ensure you have MONGO_URI in your .env file

        await mongoose.connect(uri, {
            // No need to specify useNewUrlParser and useUnifiedTopology
            // as these are now default behaviors in mongoose
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
