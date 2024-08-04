// middlewares/cors.js

const allowCors = (req, res, next) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*') // Allow all origins
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    ) // Allow methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization') // Allow headers

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    // Proceed to the next middleware or route handler
    next()
}

module.exports = allowCors
