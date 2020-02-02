const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();



const PORT = process.env.PORT || 7000;
const NODE_ENV = process.env.NODE_ENV || 'development';
app.set('port', PORT);
app.set('env', NODE_ENV);


//===============================   Middlewares ===================================
app.use(logger('tiny'));
// This middleware helps you access req.body
// especially in POST requests
// If extended is false, you can not post "nested object"
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
//app.use(express.json());





//===============================   Routes ===================================

app.get('/', (req, res) => {
    res.send('OK');
});
//app.use('/', require(path.join(__dirname, 'routes')));
require('./startup/routes')(app);




//===============================   Error Middlewares ===================================
app.use(errorMiddleware.prepareError);
app.use(errorMiddleware.informError);





const server5 = app.listen(PORT, () => {
    let host = server5.address().address;
    let port = server5.address().port;
    //console.log(`API runnig on PORT: ${PORT}`)

    console.log('App listening at http://%s:%s', host, port);
});