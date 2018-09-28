const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.render('index');
});
app.get('/nosotros', (req,res) => {
    res.render('nosotros');
});
app.get('/servicios', (req,res) => {
    res.render('servicios');
});
app.get('/portafolio', (req,res) => {
    res.render('portafolio');
});
app.get('/contacto', (req,res) => {
    res.render('contacto');
});

module.exports = app