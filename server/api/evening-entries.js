const moment = require('moment')
const router = require('express').Router()
const {EveningEntry} = require('../db/models')
const {moodNetwork, savenet} = require('../brain-model/brain-model')
const {jsontoTrainingData} = require('../brain-model/translator-funcs')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const eveningEntries = await EveningEntry.findAll()
    res.json(eveningEntries)
  } catch (error) {
    next(error)
  }
})

router.get('/today', async (req, res, next) => {
  try {
    const today = moment().format('YYYY-MM-DD')
    const eveningEntry = await EveningEntry.findOne({
      where: {
        userId: req.session.passport.user,
        date: today
      }
    })
    res.send(eveningEntry)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  const today = moment().format('YYYY-MM-DD')
  try {
    if (req.session.passport.user) {
      const newEveningEntry = await EveningEntry.create({
        ...req.body, //entryToPost
        userId: req.session.passport.user,
        date: today
      })
      // const trainingData = jsontoTrainingData(req.body)
      // moodNetwork.train(trainingData)
      // savenet(moodNetwork, './network.json')
      res.send(newEveningEntry)
    }
  } catch (error) {
    next(error)
  }
})
