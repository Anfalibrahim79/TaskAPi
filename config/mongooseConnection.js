const mongoose = require('mongoose')
const dotenv = require('dotenv')
mongoose.set('strictQuery', true);

dotenv.config()


mongoose.connect(process.env.DB_URI)

const db = mongoose.connection
db.on('error', () => console.log('conection error'))
db.once('open', () => console.log('Success connected'))