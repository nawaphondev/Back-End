require('dotenv').config();
const express = require('express');
const cors = require('cors');
const notfound = require('./middlewares/notFound');
const errorMiddleware = require('./middlewares/error');
const authRoute = require('./router/auth-route');
const app = express();


app.use(cors())
app.use(express.json());

//services
app.use('/auth', authRoute);

//notfound
app.use( notfound );

//error
app.use( errorMiddleware );


let port = process.env.PORT || 8000;
app.listen(port, ()=> console.log('Serving on port :', port));