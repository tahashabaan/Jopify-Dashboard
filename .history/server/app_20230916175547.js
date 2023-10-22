import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import connectToDatabase from './config/database.js';
import UserModel  from './models/User.js';
import {handleError} from './middlewares/handleError.js';

import jobRoute from './Route/jobRoute.js'
import userRoute from './Route/userRoute.js'




const app = express();
// config file env
dotenv.config({path:'./config.env'});
// receive data as json
app.use(express.json());


// handle request in development mode
if(process.env.NODE_ENV ===  'development'){
  app.use(morgan('dev'))
}

app.use('/dashboard', jobRoute)
app.use('/user', userRoute)



// handle global error
app.use(handleError)

// listing app on port 3000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listning on ...."+ port);
  //connet to database
  connectToDatabase();

});
