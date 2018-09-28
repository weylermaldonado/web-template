require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public')); 
app.use(require('./routes/index'));


app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});