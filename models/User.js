const {Schema, model, Types} = require('mongoose');

const schema = Schema({
  email: {type: String, require: true, unique: true},
  password: {type: String, require: true},
  isStaff: {type: Boolean, default: false},
  date: {type: Date, default: Date.now},
  name: {type: String, require: true},
  surname: {type: String, require: true},
  subscriptions: [{type: Types.ObjectId, ref: 'Bar', default: ''}],
  imageUrl: {type: String, default: 'https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg'}
})

module.exports = model('User', schema);