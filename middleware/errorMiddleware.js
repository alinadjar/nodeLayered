module.exports = {
    prepareError: (err, req, res, next) => {
        
            console.log('err.myErrMSG = '+err.myErrMSG);
            console.log(err);
            //const err = new Error(`${req.method}-${req.url} Not Found`);
            const erro = new Error(err.message);
            erro.status = err.status || 500;
            next(erro);    
    },
    informError: (err, req, res, next) => {
        console.log(err);
        res.status(err.status || 500);
        res.json({
            error: {
                message: err.message,
                status: err.status 
            },
        });
    }
}