'use strict';

const connection = require('../models/connection')
const response = require('../resp/res')

// tes routes untuk page home
exports.index = ((req, res)=>{
    response.succsess("Belajar membuat rest api", res);
});

// get all country
exports.allCountry = ((req, res)=>{
    connection.query('SELECT (code) as id, (name) as value FROM country WHERE delete_flag = 0 AND inactive_flag = 0', (error, rows, fields)=>{
        if (error) {
            console.log(error);
        } else {
            response.succsess(rows, res);
        }
    });
});

// get country with code or name country
exports.getCountryCode = ((req, res)=>{
    var code = req.body.code;

    connection.query('SELECT * FROM country WHERE code=? ', [code], (error, rows, fields)=>{
        if (error) {
            console.log(error)
        } else {
            response.succsess(rows, res)
        }
    });
});

