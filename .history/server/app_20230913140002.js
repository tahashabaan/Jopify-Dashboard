const express= require('express');
const app = express();


app.use(app.json())
app.listen(300, () => {
    console.log('listning on ....');
})