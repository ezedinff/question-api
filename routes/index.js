var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  const { params } = req;
  res.send(params);
});

module.exports = router;
