var express = require('express');
var router = express.Router();

const providersModel=require('../models/providers.model')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
