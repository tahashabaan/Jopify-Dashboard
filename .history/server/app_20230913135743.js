const express= require('express')();

const app = express();



express.listen(300, () => {
    console.log('listning on ....');
})