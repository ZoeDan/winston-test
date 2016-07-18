var express = require('express');
var router = express.Router();
var logger =require('../loggers-gae');

/* GET home page. */
router.get('/', function(req, res, next) {
  //logger.default('this is a default message by zoe');
  //logger.debug('this is a debug message by zoe');
  logger.info('this is my normal info message by zoe');
  //logger.notice('this is a notice by zoe');

  console.log("writing to logs viewer by zoe");

 // logger.warning('this is a warning by zoe');
  //logger.error('this is an error message by zoe');
  //logger.critical('this is a critical message by zoe');
  //logger.alert('this is an alert by zoe');
  //logger.emergency('this is an emergency');

  res.render('index', { title: 'Express' });
});

module.exports = router;
