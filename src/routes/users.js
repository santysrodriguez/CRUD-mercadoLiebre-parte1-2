var express = require('express');
var router = express.Router();
const {check} = require('express-validator');

const{register} = require('../controllers/usersController');


//user//
router
    .get('/register',register)


module.exports = router;