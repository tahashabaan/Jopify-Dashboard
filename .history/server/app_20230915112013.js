import * as dotenv from 'dotenv'
import express from 'express'

const app = express();

dotenv.config({path:'./config.env'})
app.use(express.json());

app.listen(process.env.POR, () => {
  console.log("listning on ....");
});
