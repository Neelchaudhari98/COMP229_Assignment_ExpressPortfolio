/*
File name: users.js
Student's Name: Neel Chaudhari
StudentID: 301345109
Date: February 8, 2023
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello');
});

module.exports = router;
