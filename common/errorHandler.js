var logger = require('./logger');

module.exports=function(err,req,res,next){
    logger.error(err);
    res.status(500);
    if(err){
        res.send(err)
    }
    res.send("error occure");
};