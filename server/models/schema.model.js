const mongoose = require('mongoose');

const SchemaSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  type: {
    type: String,
    required: true,
    enum: ['platform', 'equipment'],
  },
  fields: Array,
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('Schema', SchemaSchema);
