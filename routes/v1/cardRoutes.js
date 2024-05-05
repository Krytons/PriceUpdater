const debug = require('debug')('app:routes:v1:upload');
const express = require('express');
const storageHelper = require('../../helpers/storage');

debug('Upload routes');

const router = express.Router();

const CardController = require('../../controllers/v1/CardController');

// Define route and it's controller
router.route('/upload').post(storageHelper.upload.single('csvFile'), CardController.upload); 
router.route('/process').post(CardController.process); 
router.route('/test').get(CardController.test); 

module.exports = router;