const router = require('express').Router();
const conversionController = require('../controllers/conversion.controller');

router.route('/').post(conversionController.execute);

module.exports = router;