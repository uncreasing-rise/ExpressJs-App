const StockInService = require('../Services/stockInService');

class StockInController {
    static async createStockIn(req, res) {
        try {
            const stockIn = await StockInService.createStockIn(req.body);
            res.status(201).json({ success: true, data: stockIn });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async getStockInById(req, res) {
        try {
            const stockIn = await StockInService.getStockInById(req.params.id);
            if (!stockIn)
                return res
                    .status(404)
                    .json({ success: false, message: 'StockIn not found' });
            res.status(200).json({ success: true, data: stockIn });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async getAllStockIns(req, res) {
        try {
            const stockIns = await StockInService.getAllStockIns();
            res.status(200).json({ success: true, data: stockIns });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async updateStockIn(req, res) {
        try {
            const updatedStockIn = await StockInService.updateStockIn(
                req.params.id,
                req.body
            );
            res.status(200).json({ success: true, data: updatedStockIn });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async deleteStockIn(req, res) {
        try {
            const response = await StockInService.deleteStockIn(req.params.id);
            res.status(200).json({ success: true, message: response.message });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = StockInController;
