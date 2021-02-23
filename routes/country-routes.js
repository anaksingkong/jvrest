'use strict';

module.exports = ((app)=>{

    // mengimport data dari controllers
    const resJson = require('../controllers/country-controllers');

    // route for home
    app.route('/')
        .get(resJson.index);

    // route for get all country
    app.route('/api/v1/country')
        .get(resJson.allCountry);

    // route for get country with delete-flag = false and inactive_flag=false
    app.route('/api/v1/get-country-flag')
        .get(resJson.getCountryFlag);

    // route for get country for code (serach using code /ID/US/SA)
    app.route('/api/v1/get-country-code/:code')
        .get(resJson.getCountryCode);

    // route for create new country
    app.route('/api/v1/create-country')
        .post(resJson.createCountry);

    // route for update country
    app.route('/api/v1/update-country')
        .put(resJson.updateCountry);
    
    // route for delete country
    app.route('/api/v1/delete-country')
        .delete(resJson.deleteCountry);
});

