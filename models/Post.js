const {Schema, model, Types} = require('mongoose');

const post = Schema({
  title: {type: String, require: true},
  subtitle: {type: String, default: null},
  body: {type: String, require: true},
  date: {type: Date, default: Date.now},
  owner: {type: Types.ObjectId, ref: 'User'},
  likes: {type: Number, default: 0},
  views: {type: Number, default: 0},
  imageUrl: {type: String, default: ''},
  date: {type: Date, default: Date.now}
})

module.exports = model('Post', post);
