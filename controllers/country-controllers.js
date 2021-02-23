'use strict';

const connection = require('../models/connection')
const response = require('../resp/res')

exports.index = ((req, res)=>{
    response.succsess("Belajar membuat rest api", res);
});

