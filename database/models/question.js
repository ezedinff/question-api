var mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question_number: Number,
    annotations: {
        type: [String],
        index: true
    }
});
const questionModel = mongoose.model('Question', questionSchema);

module.exports = questionModel