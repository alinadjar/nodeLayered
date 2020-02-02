const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();



const PORT = process.env.PORT || 2000;
const NODE_ENV = process.env.NODE_ENV || 'development';



//===============================   Middlewares ===================================
// This middleware helps you access req.body
// especially in POST requests
// If extended is false, you can not post "nested object"
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
//app.use(express.json());





//----------------------------------------------
app.get('/users', (req, res) => {
    fs.readFile(__dirname + "/Data/" + "users.json", 'utf8', (err, data) => {
        if(err) {
            return res.status(500).send({ error: true, message: '--------------------'});
        }
        console.log(data);
        res.end(data);
    });
});


//----------------------------------------------
var userNEW = {
    "user4": {
        "id": 4,
        "name": "Mah",
        "password": 124
    }
};

app.post('/users', (req, res) => {
    fs.readFile(__dirname + "/Data/" + "users.json", 'utf8', (err, data) => {
        data = JSON.parse(data);
        data["user4"] = userNEW["user4"];
        console.log(data);

        res.end(JSON.stringify(data));
    });
});

//----------------------------------------------
app.post('/users2', (req, res) => {
    console.log(req.body);

    res.send(req.body);
});


//----------------------------------------------
app.delete('/users/:id', (req, res) => {

    // const ID = req.params.id && req.params.id < 4 ? parseInt(req.params.id) : 3;
    const ID = Number(req.params.id);
    //res.send({  result: ID});

    fs.readFile(__dirname + "/Data/" + "users.json", 'utf8', (err, data) => {
        data = JSON.parse(data);
        
        delete data["user"+ID];

        res.json(data);
    });
    
});

// console.log(__dirname);
// console.log(__filename);
// console.log(app.get('env'));
// app.set('port', PORT);
// console.log(app.get('port'));



const server5 = app.listen(PORT, () => {
    let host = server5.address().address;
    let port = server5.address().port;
    //console.log(`API runnig on PORT: ${PORT}`)

    console.log('App listening at http://%s:%s', host, port);
});