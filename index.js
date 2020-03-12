const express = require('express');
const app = express();




const PORT = process.env.PORT || 2000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
    //res.status(200).send('Good Day');
    res.json({
        emp : 'NAME',
        age: 10,
        m: false,
        courses: [
            {
                name: "math",
                score: 'A'
            },
            {
                name: "biology",
                score: 18
            },
        ]
    });
});

console.log(__dirname);
console.log(__filename);
console.log(app.get('env'));
app.set('port', PORT);
console.log(app.get('port'));



app.use('/v3', require('./API/index'));

const server5 = app.listen(PORT, () => {
    let host = server5.address().address;
    let port = server5.address().port;
    //console.log(`API runnig on PORT: ${PORT}`)

    console.log('App listening at http://%s:%s', host, port);
});