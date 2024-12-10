const express = require('express');
const multer = require('multer');
const CSVController = require('../controllers/CSVController');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/import/:model', upload.single('file'), CSVController.importCSV);
router.get('/export/:model', CSVController.exportCSV);

module.exports = router;
