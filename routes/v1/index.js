const debug = require('debug')('app:routes:v1');
const express = require('express');
const router = express.Router();

debug('Configuring routes');

// Import and setup base routes for version 1
const cards = require('./cardRoutes');
const ebay = require('./ebayRoutes');

router.use('/cards', cards);
router.use('/ebay', ebay);

module.exports = router;