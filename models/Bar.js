const {Schema, model, Types} = require('mongoose');

const bar = Schema({
  name: {type: String, require: true},
  address: {type: String, require: true},
  clicks: {type: Number, default: 0},
  staff: [{type: Types.ObjectId, ref: 'User'}],
  subscriptions: [{type: Types.ObjectId, ref: 'User'}],
  imageUrl: {type: String, default: 'https://www.logaster.ru/blog/wp-content/uploads/sites/2/2020/10/bar-name-h-e1603655326989.jpg'}
})

module.exports = model('Bar', bar);
