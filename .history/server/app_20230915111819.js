import express from 'express'
import * as doten

const app = express();

app.use(express.json());

app.listen(300, () => {
  console.log("listning on ....");
});
