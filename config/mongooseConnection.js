const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

mongoose.connect(process.env.DB_URI)

const db = mongoose.connection
db.on('error', () => console.log('conection error'))
db.once('open', () => console.log('Success connected'))