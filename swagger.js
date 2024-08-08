// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'My Express API',
        version: '1.0.0',
        description: 'API documentation for my Express app',
    },
    servers: [
        {
            url: 'http://localhost:5000', // Change to your server URL
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./Routes/*.js'], // Path to the API docs (adjust as necessary)
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
