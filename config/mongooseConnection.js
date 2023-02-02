const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://mongo:7GI3GzvbKEnY8c7F2knV@containers-us-west-82.railway.app:7039')

const db = mongoose.connection
db.on('error', () => console.log('conection error'))
db.once('open', () => console.log('Success connected'))