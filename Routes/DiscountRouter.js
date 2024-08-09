const express = require('express');
const DiscountController = require('../Controllers/DiscountController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Discount:
 *       type: object
 *       required:
 *         - name
 *         - discountType
 *         - value
 *         - startDate
 *         - endDate
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the discount
 *         name:
 *           type: string
 *           description: Name of the discount
 *         discountType:
 *           type: string
 *           enum: [percentage, fixed]
 *           description: Type of the discount
 *         value:
 *           type: number
 *           description: Value of the discount
 *         startDate:
 *           type: string
 *           format: date
 *           description: Start date of the discount
 *         endDate:
 *           type: string
 *           format: date
 *           description: End date of the discount
 *         isActive:
 *           type: boolean
 *           description: Is the discount active or not
 *       example:
 *         name: Summer Sale
 *         discountType: percentage
 *         value: 10
 *         startDate: 2024-08-01
 *         endDate: 2024-08-31
 *         isActive: true
 */

/**
 * @swagger
 * /api/discounts:
 *   post:
 *     summary: Create a new discount
 *     tags: [Discounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Discount'
 *     responses:
 *       200:
 *         description: The discount was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Discount'
 *       500:
 *         description: Some server error
 */

router.post('/', DiscountController.createDiscount);

/**
 * @swagger
 * /api/discounts:
 *   get:
 *     summary: Get all discounts
 *     tags: [Discounts]
 *     responses:
 *       200:
 *         description: List of all discounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Discount'
 */
router.get('/', DiscountController.getAllDiscounts);

/**
 * @swagger
 * /api/discounts/{id}:
 *   put:
 *     summary: Update a discount
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The discount id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Discount'
 *     responses:
 *       200:
 *         description: The discount was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Discount'
 *       404:
 *         description: The discount was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', DiscountController.updateDiscount);

/**
 * @swagger
 * /api/discounts/{id}:
 *   delete:
 *     summary: Delete a discount
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The discount id
 *     responses:
 *       200:
 *         description: The discount was deleted
 *       404:
 *         description: The discount was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', DiscountController.deleteDiscount);

module.exports = router;
