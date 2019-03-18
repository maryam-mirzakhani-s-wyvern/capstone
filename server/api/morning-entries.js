const router = require('express').Router()
const {MorningEntry} = require('../db/models')
const {moodNetwork, avgOfRuns} = require('../brain-model/brain-model')
const jsonToBrainData = require('../brain-model/translator-funcs')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
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
