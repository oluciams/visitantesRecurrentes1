const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongo-3', {
 useNewUrlParser: true,
 useUnifiedTopology: true
});
 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {console.log('db connected')})
