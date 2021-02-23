const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// inisialisasi port 
const port = 3000;

// memanggil routes
const routes = require('./routes/country-routes');

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// inisialisasi fungsi app pada route
routes(app);

// inisial port aplikasi berjalan
app.listen(port, ()=>{
    console.log(`Server berjalan pada port ${port}`);
});
