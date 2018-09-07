const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public')); 


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
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});