// model.js
const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    grade: Number,
    contents: String,
    registration_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: Date.now },
    isComplete: Boolean
}, { 
    collection: 'TODO_LIST',
    versionKey: false
});

module.exports = mongoose.model('todo', todoSchema);