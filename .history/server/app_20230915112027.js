import * as dotenv from 'dotenv'
import express from 'express'

const app = express();

dotenv.config({path:'./config.env'})
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("listning on ...."=);
});
