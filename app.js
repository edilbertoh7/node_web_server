require ('dotenv').config();
const express = require('express')
var hbs = require('hbs');
const app = express()
const port = process.env.PORT;

//handlebars
//https://github.com/pillarjs/hbs
// uso para express
//https://github.com/pillarjs/hbs

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home',{
    name: 'Edilberto Herrera',
    title: 'curso de node',
  });
})


app.get('/hola-mundo', (req, res) => {
    res.send('ruta hola mundo')
  })
  // mostrar la ruta creando la carpeta de la ruta
  app.get('/generic', (req, res) => {
    res.render('generic',{
        name: 'Edilberto Herrera',
        title: 'curso de node',
      });
  })

  app.get('/elements', (req, res) => {
    res.render('elements',{
        name: 'Edilberto Herrera',
        title: 'curso de node',
      });
  })

  

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  })

app.listen(port,()=>{
    console.log(`escuchando el puerto http://localhost:${port}`)
})