const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.send(JSON.stringify("Hallo bro"));
});

app.listen(port, ()=>{
    console.log(`Server berjalan pada port ${port}`);
});
