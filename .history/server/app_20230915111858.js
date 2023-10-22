import * as dotenv from 'dotenv'
import express from 'express'

const app = express();

dotenv
app.use(express.json());

app.listen(300, () => {
  console.log("listning on ....");
});
