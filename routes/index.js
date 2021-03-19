var express = require('express');
var router = express.Router();
const {index, register, dashoard, postRegister} = require('../controller/IndexController')

/* GET home page. */
router.get('/', index);
router.get('/register', register);
router.post('/register', postRegister);
router.get('/dashboard', dashoard);

module.exports = router;
