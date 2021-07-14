const express = require('express')
const hbs = require('express-handlebars');
const path = require('path')

require('./configuration/config.db')

const app = express()


app.use(express.urlencoded({extended:true}))

app.set('views', path.join(__dirname, 'views'))

app.engine('.hbs', hbs({   layoutsDir:path.join(app.get('views'),'layouts'),
   partialsDir:path.join(app.get('views'),'partials'),
   extname:'.hbs',
   defaultLayout:'main'
}))

app.set('view engine', 'hbs')
 
app.get('/', (req, res)=>{
   res.send('hola')
})














app.listen(3000, ()=> console.log("running in port 3000"))