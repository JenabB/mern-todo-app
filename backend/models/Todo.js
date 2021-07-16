const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: String,
  completed: false,
});

module.exports = mongoose.model('Todo', TodoSchema);
