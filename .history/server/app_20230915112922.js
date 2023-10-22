import express from 'express'
import dotenv from 'dotenv'

const app = express();

dotenv.config({path:});
console.log(dotenv.config())
app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listning on ...."+ port);
});
