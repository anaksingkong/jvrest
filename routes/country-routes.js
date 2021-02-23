'use strict';

module.exports = ((app)=>{

    // mengimport data dari controllers
    const resJson = require('../controllers/country-controllers');

    app.route('/')
        .get(resJson.index);

    app.route('/api/v1/all-country')
        .get(resJson.allCountry);

    app.route('/api/v1/get-country-code/:code')
        .get(resJson.getCountryCode);

    app.route('/api/v1/create-country')
        .post(resJson.createCountry);

    app.route('/api/v1/edit-country')
        .put(resJson.updateCountry);
    
});

