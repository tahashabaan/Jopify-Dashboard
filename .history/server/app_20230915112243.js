import * as dotenv from 'dotenv'
import express from 'express'

const app = express();

dotenv.config({path:'config.env'})
app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listning on ...."+ process.env.PORT);
});
