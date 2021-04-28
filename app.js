const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const multer = require("multer");

const PORT = config.get('port') || 5000;
const app = express();

app.use(express.json({extended: true}));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/bar', require('./routes/bar.routes'));
app.use('/api/posts', require('./routes/posts.routes'));

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => {
      console.log(`App has been started at port ${PORT}`);
    })
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start();

