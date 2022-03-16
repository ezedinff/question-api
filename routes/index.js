const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search.controller');

router.get('/', (req, res, next) => {
    const welcomeMessage = 'Welcome to the search API and you can search for questions by topic. You can use GET /search?q=<topic> to search for questions by topic.';
    res.status(200).send(welcomeMessage);
});

/* GET */
router.get('/search', searchController);

module.exports = router;
