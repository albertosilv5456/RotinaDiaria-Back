const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController');

router.post('/register',authController.register)
router.post('/',authController.AuthenticatorResponse)


module.exports = router;