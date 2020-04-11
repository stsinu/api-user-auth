const  express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
// Import Router
const authRouter = require('./router/auth');

//connect BD mongo

dotenv.config();
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true , useUnifiedTopology: true}, ()=>
 console.log( 'connect to BD'));


app.use(express.json());

// Midlewares
app.use('/api/user', authRouter);

app.listen(3000, () => console.log("Welcome api "));
