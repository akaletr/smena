const {Router} = require('express');
const Bar = require('../models/Bar');
const User = require('../models/User');
const multer = require('multer');

const router = Router();
router.use(multer({dest:"uploads"}).single("filedata"))

router.post('/', async (req, res) => {
  const data = new Bar({name: req.body.name, address: req.body.address});
  await data.save();
})


router.get('/find', async (req, res) => {
  try {
    const organizations = await Bar.find();
    res.json(organizations);
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
  }
})

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const bar = await Bar.findById(req.params.id);
    res.json(bar);
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
  }
})

router.post('/subscriptions', async (req, res) => {

  try {
    const user = await User.findOne({_id: req.body.userId});
    const arr = [];
    for (let key of user.subscriptions) {
      let bar = await Bar.findOne({_id: key})
      arr.push(bar)
      console.log(bar)
    }
    res.json(arr)
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
  }
})

router.post('/subscribe', async (req, res) => {
  try {
    const user = await User.findOne({_id: req.body.userId});
    if (user.subscriptions.includes(req.body.id)) {
      return res.status(400).json({message: 'Подписка уже оформлена'})
    }
    await User.updateOne({_id: req.body.userId}, {$push: {subscriptions: req.body.id}})
    await Bar.updateOne({_id: req.body.id}, {$push: {subscriptions: req.body.userId}})

    res.json({message: 'Вы успешно подписались'});
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
  }
})

module.exports = router;