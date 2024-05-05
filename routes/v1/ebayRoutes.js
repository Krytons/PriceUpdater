const debug = require('debug')('app:routes:v1:ebay');
const express = require('express');

debug('Ebay routes');

const router = express.Router();
const EbayController = require('../../controllers/v1/EbayController');

// Define route and it's controller
router.route('/authorize/start').get(EbayController.authorizeStart); 
router.route('/authorize/success').post(EbayController.authorizeSuccess); 
router.route('/authorize/fail').post(EbayController.authorizeFail); 

module.exports = router;