const express = require('express')
const {
    createOrderController,
    getAllOrdersController,
    getOrderByIdController,
    updateOrderController,
    deleteOrderController,
} = require('../controllers/OrderController')

const router = express.Router()

router.post('/', createOrderController)
router.get('/', getAllOrdersController)
router.get('/:id', getOrderByIdController)
router.put('/:id', updateOrderController)
router.delete('/:id', deleteOrderController)

module.exports = router
