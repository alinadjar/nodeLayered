

const userHandler = require('../routes/users');

module.exports = function(app) {


    app.get('/index', (req, res) => {
        console.log('now inside /index');
        res.send("index now");
    });
    
    app.use('/users', userHandler);


}