import path from 'path' 

import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
// import { dirname } from 'path';

import jobRoute from './Route/jobRoute.js'
import userRoute from './Route/userRoute.js'
import authRoute from './Route/authRoute.js'
import __dirname from './utils/dirname.js'
import {connectToDatabase} from './db/database.js';
import {handleError} from './middlewares/handleError.js';



export default class App{

  constructor(){

  }

  initialApp(){

  }

  listen(){
    
  }
}

const app = express();
// config file env
dotenv.config({path:'./config/config.env'});
// receive data as json
app.use(express.json());
// read ststic file 
app.use(express.static(path.resolve(__dirname, './uploads')))
// handle request in development mode
if(process.env.NODE_ENV ===  'development'){
  app.use(morgan('dev'))
}

if(process.env.NODE_ENV ===  'development'){
  apd
}
// route in app
app.use('/dashboard', jobRoute)
app.use('/user', userRoute)
app.use('/auth', authRoute)



// handle global error
app.use(handleError)

// listing app on port 3000
const port = process.env.PORT || 5000;

const URL = process.env.DB_URL;
connectToDatabase(URL);
 const server = app.listen(port, () => {
  console.log("listning on ...."+ port);
  //connet to database
});



