const topicModel = require('../../database/models/topic');
const questionModel = require('../../database/models/question');
const topics = require('./data/topics');
const questions = require('./data/questions');
// seed database
const seed = async () => {
    try {
        await topicModel.insertMany(topics);
        await questionModel.insertMany(questions);
    } catch (err) {
      //  console.log(err);
    }
};

module.exports = seed;