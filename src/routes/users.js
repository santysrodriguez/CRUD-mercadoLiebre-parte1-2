var express = require('express');
var router = express.Router();
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')

const{register,login, processLogin,processRegister} = require('../controllers/usersController');


//user//
router
    .get('/register',register)
    .post('/register',registerValidator,processRegister)
    .get('/login', login)
    .post('/login',loginValidator,processLogin)


module.exports = router;