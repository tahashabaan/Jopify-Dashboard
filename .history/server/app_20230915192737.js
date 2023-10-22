import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import connectToDatabase from './config/database.js';
im
import {handleError} from './middlewares/handleError.js';




const app = express();
// config file env
dotenv.config({path:'./config.env'});
// receive data as json
app.use(express.json());


// handle request in development mode
if(process.env.NODE_ENV ===  'development'){
  app.use(morgan('dev'))
}

app.get('/all-jobs', (req, res , next) => {
  res.json({msg:'hello'})
  // next(new ApiError({statusCode:401, message:'not found model job'}))
})

app.get('/all-jobs', (req, res , next) => {
  res.json({msg:'hello'})
  // next(new ApiError({statusCode:401, message:'not found model job'}))
})

app.post('/all-jobs', async(req, res , next) => {
  await User.create({
    name:'taha',
    email:'tahashabaan48@gmail.com'
  })
  // next(new ApiError({statusCode:401, message:'not found model job'}))
})


app.use(handleError)
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listning on ...."+ port);
  connectToDatabase();

});
