const fs = require('fs');
const express = require('express');
const router = express.Router();


const filepath = __dirname + "/../Data/" + "users.json";


//  GET:  /users
router.get('/', (req, res, next) => {

    //console.log(__dirname);
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            console.error(err); //Outputs an error message to the Web Console
            err.myErrMSG = 'invalid file path/ unable to read file';

            return next(err);
            //next(err);
            //return;
        } else {
            res.send(data);
        }
    });
});


// GET: /users/:id
router.get('/:id', (req, res, next) => {

    try {
        
        const data = fs.readFileSync(filepath);

        const users = JSON.parse(data);
        console.log(users);


        // {
        //     user1: { id: 1, name: 'Alex', password: 121 },
        //     user2: { id: 2, name: 'Jeremy', password: 122 },
        //     user3: { id: 3, name: 'Taylor', password: 123 }
        // }

        console.log(Object.values(users));

        const user = Object.values(users).find(user => user.id === Number(req.params.id));
        if (!user) {
            const err = new Error('User Not Found !');
            err.status = 404;
            throw err;
        }

        console.log(user);
        res.json(user);

    } catch (e) {
        next(e);
    }
});


//#######################################    Question    ##################################################
// Question? =============>  How to await fs.readFile ?
// Answer: fs.readFile does not return a promise
// Solution 1: use callback as already used in our codes below
// Solution 2: use fs.readFileSync instead
// Solution 3: 

//To use it with await you can use util.promisify to convert a callback based function into a promise based one.

// const { promisify } = require('util');
// const readFIle = promisify(fs.readFile);

// function readFileBody() {
//     return readFile(files[1], 'utf8');    
// }

// async function printFiles () {
//     body = await readFileBody();
// }

//In node >= 10 you can use fs/promises to avoid promisify

// const fs = require('fs').promises;

// function readFileBody() {
//     return fs.readFile(files[1], 'utf8');
// }

//##################################################################################################



//----------------------------------------------
var userNEW = {
    "user4": {
        "id": 4,
        "name": "Mah",
        "password": 124
    }
};

// POST: /users 
// body: {}

router.post('/users', (req, res) => {
    fs.readFile(filepath, 'utf8', (err, data) => {

        if (err) {
            return next(err);
        }

        data = JSON.parse(data);
        data["user4"] = userNEW["user4"];
        console.log(data);

        res.end(JSON.stringify(data));
    });
});


//----------------------------------------------
// POST /users2
// body: {
//  	"id": 5,
//  	"name": "Kate",
//  	"password": 6
// }
router.post('/users2', (req, res) => {
    console.log(req.body);

    res.send(req.body);
});


//----------------------------------------------
// DEL: /users/:id
router.delete('/users/:id', (req, res) => {

    // const ID = req.params.id && req.params.id < 4 ? parseInt(req.params.id) : 3;
    const ID = Number(req.params.id);
    //res.send({  result: ID});

    fs.readFile(filepath, 'utf8', (err, data) => {

        if (err) {
            return next(err);
        }

        data = JSON.parse(data);

        delete data["user" + ID];

        res.json(data);
    });

});


module.exports = router;