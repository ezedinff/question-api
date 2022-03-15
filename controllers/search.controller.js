const Topic = require('../database/models/topic');
const getQuery = require('../database/queries/getQuestions.query');

module.exports = async (req, res, next) => {
    const { query } = req;
    const { q } = query;
    
    if (!q) {
        return next();
    }
    const getQuestionsQuery = getQuery(q);
    let questions = await Topic.aggregate(getQuestionsQuery);
    if (questions.length) {
        questions = questions[0].questions;
    }

    res.status(200).send(questions);
};