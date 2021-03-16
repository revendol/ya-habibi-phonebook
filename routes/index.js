var express = require('express');
var router = express.Router();
const {index, register} = require('../controller/IndexController')

/* GET home page. */
router.get('/', index);
router.get('/register', register);

module.exports = router;
