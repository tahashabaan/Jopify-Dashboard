import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

const app = express();
// config file eb
dotenv.config({path:'./config.env'});
app.use(express.json());


// handle request
if(process.env.NODE_ENV ===  'development'){
  app.use(morgan('dev'))
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listning on ...."+ port);
});
