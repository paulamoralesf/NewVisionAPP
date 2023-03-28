var express = require('express');
var router = express.Router();

const clientsModel=require('../models/clients.model')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
