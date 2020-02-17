const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {    

    const token = req.header('x-auth-token');    

    if(!token) 
        return res.status(401).send('Access Denied, No token provided');

    try{
        // const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        const decoded = jwt.verify(token, config.get('SECRET'));
        console.log('TOKEN DECODED: ' + JSON.stringify(decoded));
        req.user = decoded; // this decoded is the payload object embedded in the token upon creation
        console.log(decoded.username);
        next();
    }
    catch (ex) {
        console.log(ex);
        res.status(400).send('Invalid Token');
    }

}