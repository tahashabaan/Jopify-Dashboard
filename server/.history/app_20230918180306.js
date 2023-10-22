import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import jobRoute from './Route/jobRoute.js'
import userRoute from './Route/userRoute.js'
import authRoute from './Route/authRoute.js'
import __dirname from './uti'
import connectToDatabase from './config/database.js';
import {handleError} from './middlewares/handleError.js';




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Now you can use __dirname as before
console.log(__dirname);


const app = express();
// config file env
dotenv.config({path:'./config.env'});
// receive data as json
app.use(express.json());
// read ststic file 
// app.use(express.static(path.join(__dirname),'uploads'))
console.log(__dirname);
// handle request in development mode
if(process.env.NODE_ENV ===  'development'){
  app.use(morgan('dev'))
}

// route in app
app.use('/dashboard', jobRoute)
app.use('/user', userRoute)
app.use('/auth', authRoute)



// handle global error
app.use(handleError)

// listing app on port 3000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listning on ...."+ port);
  //connet to database
  connectToDatabase();

});
