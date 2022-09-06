const {check, body} = require('express-validator');

module.exports = [
    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debe ser un email válido').bail(),

    check('password')
        .notEmpty().withMessage('La contraseña es obligatoria').bail()
        .isLength({
            min : 6, 
            max : 12
        }).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
]