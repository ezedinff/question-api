var mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({});

const questionModel = mongoose.model('Question', questionSchema);