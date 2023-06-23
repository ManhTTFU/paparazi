// const engine  = require('express-handlebars')
const path = require('path');
// const handlebars = require('express-handlebars');
const { engine  } = require ('express-handlebars');
const express = require('express')
const morgan = require('morgan')
const route = require('./routes')
const app = express()
const port = 3000

// static file img
app.use(express.static(path.join(__dirname, 'public')))

// sử dụng res.body
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())


app.use(morgan('combined'))


// temp engine
app.engine('hbs', engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})