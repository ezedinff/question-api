var mongoose = require('mongoose');


const topicSchema = new mongoose.Schema({
    _id: String,
    ancestors: {
        type: [String],
        index: true
    },
    parent: String
});
const topicModel = mongoose.model('Topic', topicSchema);

// export topic model only
module.exports = topicModel;