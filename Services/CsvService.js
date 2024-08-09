const fs = require('fs');
const csv = require('fast-csv');
const Customer = require('../models/Customer');
const Product = require('../Models/Product');
const Order = require('../Models/Order');
const Discount = require('../Models/Discount');
const importCSV = async (filePath, model) => {
    const modelMap = {
        customers: Customer,
        products: Product,
        orders: Order,
        discounts: Discount,
    };

    const Model = modelMap[model];
    if (!Model) throw new Error('Invalid model specified');

    const data = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: true }))
            .on('data', (row) => data.push(row))
            .on('end', async () => {
                try {
                    await Model.insertMany(data);
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
    });
};

const exportCSV = async (model) => {
    const modelMap = {
        customers: Customer,
        products: Product,
        orders: Order,
        reviews: Discount,
    };

    const Model = modelMap[model];
    if (!Model) throw new Error('Invalid model specified');

    const data = await Model.find();

    return new Promise((resolve) => {
        const csvStream = csv.format({ headers: true });
        const csvData = [];

        csvStream.on('data', (chunk) => csvData.push(chunk.toString()));
        csvStream.on('end', () => resolve(csvData.join('')));

        data.forEach((record) => csvStream.write(record.toObject()));
        csvStream.end();
    });
};

module.exports = {
    importCSV,
    exportCSV,
};
