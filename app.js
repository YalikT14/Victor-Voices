const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('index', { title: 'Victor Ruiz - Voice Over Talent' });
});

app.get('/demos', (req, res) => {
  res.render('demos', { title: 'Demos - Victor Ruiz' });
});

app.get('/trabajos-previos', (req, res) => {
  res.render('trabajos', { title: 'Trabajos Previos - Victor Ruiz' });
});

app.get('/sobre-mi', (req, res) => {
  res.render('sobre-mi', { title: 'Sobre Mí - Victor Ruiz' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});