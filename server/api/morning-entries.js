const router = require('express').Router()
const {MorningEntry} = require('../db/models')
const {moodNetwork, avgOfRuns} = require('../brain-model/brain-model')
const jsonToBrainData = require('../brain-model/translator-funcs')
module.exports = router

// api/morning-entries
router.get('/', async (req, res, next) => {
  try {
    const morningEntries = await MorningEntry.findAll()
    res.json(morningEntries)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
//     const newMorningEntry = await MorningEntry.create(req.body)
    const translatedData = jsonToBrainData(req.body)
    const modelOutput = avgOfRuns(translatedData, moodNetwork, 100)
    const newMorningEntry = await MorningEntry.create({
      ...req.body,
      pleasant: modelOutput.pleasant,
      tension: modelOutput.tension,
      energy: modelOutput.energy
    })

    res.send(newMorningEntry)
  } catch (error) {
    next(error)
  }
})
