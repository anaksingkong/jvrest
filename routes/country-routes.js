'use strict';

module.exports = ((app)=>{

    // mengimport data dari controllers
    const resJson = require('../controllers/country-controllers');

    app.route('/')
        .get(resJson.index);
})

