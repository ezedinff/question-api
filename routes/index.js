const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search.controller');


/* GET */
router.get('/search', searchController);

module.exports = router;
