import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

const app = express();

// config file env
dotenv.config({path:'./config.env'});
// receive data as json
app.use(express.json());


// handle request in development mode
if(process.env.NODE_ENV ===  'development'){
  app.use(morgan('dev'))
}

app.use((err, req, res, next) => {
  res.status(404).json{
    ststus:falid
  }
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listning on ...."+ port);
});
