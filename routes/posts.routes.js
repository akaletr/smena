const {Router} = require('express');
const Post = require('../models/Post');
const User = require('../models/User');
const multer = require("multer");


const router = Router();

// const storageConfig = multer.diskStorage({
//   destination: (req, file, cb) =>{
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) =>{
//     console.log(file)
//     cb(null, file.fieldname + Date.now() + '.' + file.mimetype.substr(file.mimetype.indexOf('/') + 1));
//   }
// });
// router.use(multer({storage:storageConfig}).single("filedata"));

router.get('/find', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {}
})

router.post('/user', async (req, res) => {
  try {
    console.log(req)
    const user = await User.findOne({_id: req.body.userId});
    console.log(user)
    res.json(user)
  } catch (e) {}
})

router.post('/create', async (req, res) => {
  console.log(req.body);
  const user = req.body.user
  const data = new Post({
    title: req.body.form.title,
    subtitle: req.body.form.subtitle,
    body: req.body.form.body,
    owner: req.body.user.userId
  });
  await data.save();
  res.status(201).json({message: 'Пост создан'})
})

module.exports = router;