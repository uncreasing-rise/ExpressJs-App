function allowCors(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Allow preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end(); // Send response and end the request
        return; // Explicitly return to avoid proceeding further
    }

    next(); // Proceed to the next middleware
}

module.exports = allowCors;
