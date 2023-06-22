// const engine  = require('express-handlebars')
const path = require('path');
// const handlebars = require('express-handlebars');
const { engine  } = require ('express-handlebars');
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

// static file img
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))


// temp engine
app.engine('hbs', engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// console.log(__dirname)
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})