const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');




module.exports = {
    register : (req,res) => {
        return res.render('formRegister')
    },
    processRegister : (req,res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            return res.send(req.body)
        }else{
            return res.render('formRegister',{
                errors :errors.mapped(),
                old : req.body
            })
        }
        
    },
    login : (req,res) => {
        return res.render('login')
    },
    processLogin : (req,res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            return res.redirect('/')
        }else{
            return res.render('login',{
                errors :errors.mapped(),
                old : req.body
            })
        }
    }
}