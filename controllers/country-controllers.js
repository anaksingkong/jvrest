'use strict';

const connection = require('../models/connection')
const response = require('../resp/res')

// tes routes untuk page home
exports.index = ((req, res)=>{
    response.succsess("Belajar membuat rest api", res);
});

// get country code and name
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

// create new country 
exports.createCountry = ((req, res)=>{
    const code = req.body.code;
    const name = req.body.name;
    const description = req.body.description;
    const delete_flag = req.body.delete_flag;
    const inactive_flag = req.body.inactive_flag;
    const created_by = req.body.created_by;
    const date_created = req.body.date_created;
    const updated_by = req.body.updated_by;
    const last_updated = req.body.last_updated;

    connection.query('INSERT INTO country (code, name, description, delete_flag, inactive_flag, created_by, date_created, updated_by, last_updated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [code, name, description, delete_flag, inactive_flag, created_by, date_created, updated_by, last_updated], (error, rows, fields)=>{
        if (error) {
            console.log(error);
        } else {
            response.succsess("Data berhasil ditambahkan", res);
        }
    });
});

// update data country
exports.updateCountry = ((req, res)=>{
    const id = req.body.id_country;
    const code = req.body.code;
    const name = req.body.name;
    const description = req.body.description;
    const delete_flag = req.body.delete_flag;
    const inactive_flag = req.body.inactive_flag;
    const created_by = req.body.created_by;
    const date_created = req.body.date_created;
    const updated_by = req.body.updated_by;
    const last_updated = req.body.last_updated;

    connection.query('UPDATE country SET code=?, name=?, description=?, delete_flag=?, inactive_flag=?, created_by=?, date_created=?, updated_by=?, last_updated=? WHERE id_country=? ', [code, name, description, delete_flag, inactive_flag, created_by, date_created, updated_by, last_updated, id], (error, rows, fields)=>{
        if (error) {
            console.log(error)
        } else {
            response.succsess("Data berhasil dirubah", res);
        }
    });
});

// delete date country
exports.deleteCountry = ((req, res)=>{
    const id = req.params.id_country;

    connection.query('DELETE FROM country WHERE id_country= ?', [id], (error, rows, fields)=>{
        if (error) {
            console.log(error);
        } else { 
            response.succsess("Data berhasil dihapus", res);
        }
    });
});
