const router = require('express').Router()
const {EveningEntry} = require('../db/models')
const {moodNetwork, savenet} = require('../brain-model/brain-model')
const {jsontoTrainingData} = require('../brain-model/translator-funcs')

module.exports = router
//route protection function
function checkAdmin(req, res, next) {
  if (req.user.isAdmin) {
    console.log('user is admin')
    return next()
  } else {
    console.log('user is not admin')
    res.status(403).send('403 forbidden')
  }
}
router.get('/', checkAdmin, async (req, res, next) => {
  try {
    const eveningEntries = await EveningEntry.findAll()
    res.json(eveningEntries)
  } catch (error) {
    next(error)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const userEntriesEve = await EveningEntry.findAll({
      where: {userId: req.params.userId}
    })
    res.json(userEntriesEve)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let userId
    if (req.session.passport) {
      userId = req.session.passport.user
    } else {
      userId = null
    }
    const newEveningEntry = await EveningEntry.create({
      ...req.body,
      date: new Date(),
      userId: userId
    })
    const trainingData = jsontoTrainingData(req.body)
    //console.log("here's the trainingData: ", trainingData)
    //console.log("here's the network pre-training: ", moodNetwork.toJSON())
    //moodNetwork.train(trainingData)
    //console.log("and here it is post-training: ", moodNetwork.toJSON())
    //savenet(moodNetwork, './network.json')
    res.send(newEveningEntry)
  } catch (error) {
    next(error)
  }
})
