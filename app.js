let express = require('express')
let app = express()
let exphbs = require('express-handlebars')

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/public'));

let util = require('./util')

app.get('/', (req, res, next) => {
 res.render('home', {
  color: util.getColor()
 })
})

app.listen('3000', () => {
  console.log('Listening on port 3000')
})

module.exports = app