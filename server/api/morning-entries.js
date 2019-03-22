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

// router.get('/:date', async (req, res, next) => {
//   try {
//     const morningEntry = await MorningEntry.findOne({
//       where: {date: req.params.date, userId: req.session.passport.user}
//     })
//     res.send(morningEntry)
//   } catch (error) {
//     next(error)
//   }
// })

router.get('/today', async (req, res, next) => {
  try {
    const morningEntry = await req.session.passport.currentMorning
    res.send(morningEntry)
  } catch (error) {
    next(error)
  }
})

// api/morning-entries
router.post('/', async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error)
  }
})
