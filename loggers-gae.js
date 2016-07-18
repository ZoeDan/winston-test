/**
 * Created by Administrator on 2016/07/15.
 */
var winston = require('winston');

// Requiring `winston-gae` will expose
// `winston.transports.GoogleAppEngine`
// and
// `winston.config.GoogleAppEngine.levels`
require('winston-gae');

/*var logger = new winston.Logger({
    levels: winston.config.GoogleAppEngine.levels,
    transports: [
        new winston.transports.GoogleAppEngine({
            // capture logs at emergency level and above (all levels)
            //level: 'emergency'
            //level: 'debug'
            level: 'info'
        })
    ]
});*/

var logger = new winston.Logger({
    levels: winston.config.GoogleAppEngine.levels,
    transports: [
        new winston.transports.GoogleAppEngine({
            // capture logs at emergency level and above (all levels)
            //level: 'emergency'
            //level: 'debug'
            level: 'info'
        })
    ]
});

module.exports = logger;
