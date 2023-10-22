import express from ''


const app = express();

app.use(express.json());

app.listen(300, () => {
  console.log("listning on ....");
});
