const express = require('express');
const app = express();

const apiRouter = require('./API/index');

app.use('/api', apiRouter);


app.listen(4000, () => {
    console.log('app running on PORT: 4000');
});