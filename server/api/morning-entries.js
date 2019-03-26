const moment = require('moment')
const router = require('express').Router()
const {MorningEntry, User} = require('../db/models')
const {moodNetwork} = require('../brain-model/brain-model')
const {jsonToBrainData} = require('../brain-model/translator-funcs')
module.exports = router

// /api/morning-entries
router.get('/', async (req, res, next) => {
  try {
    if (req.session.passport) {
      const morningEntries = await MorningEntry.findAll({
        where: {userId: req.session.passport.user}
      })
      res.json(morningEntries)
    } else {
      const morningEntries = await MorningEntry.findAll()
      res.json(morningEntries)
    }
  } catch (error) {
    next(error)
  }
})

// /api/morning-entries/today
router.get('/today', async (req, res, next) => {
  try {
    const now = moment()
    const date = now.format('YYYY')
    console.log('DATE', date)
    const morningEntry = await MorningEntry.findOne({
      where: {
        userId: req.session.passport.user
      }
    })
    res.send(morningEntry)
  } catch (error) {
    next(error)
  }
})

// api/morning-entries
// HALIMS TEST CODE FOR NO LOGGED IN USER
router.post('/', async (req, res, next) => {
  try {
    if (req.session.passport) {
      const translatedData = jsonToBrainData(req.body)
      const modelOutput = moodNetwork.run(translatedData)
      const newMorningEntry = await MorningEntry.create({
        ...req.body,
        pleasant: modelOutput.pleasant,
        tension: modelOutput.tension,
        energy: modelOutput.energy,
        userId: req.session.passport.user,
        date: new Date()
      })
      req.session.passport.currentMorning = newMorningEntry
      res.send(newMorningEntry)
    } else {
      const translatedData = jsonToBrainData(req.body)
      const modelOutput = moodNetwork.run(translatedData)
      const newMorningEntry = await MorningEntry.create({
        ...req.body,
        pleasant: modelOutput.pleasant,
        tension: modelOutput.tension,
        energy: modelOutput.energy,
        date: new Date()
      })
      res.send(newMorningEntry)
    }
  } catch (error) {
    next(error)
  }
})
