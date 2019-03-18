const router = require('express').Router()
const {MorningEntry} = require('../db/models')
const {moodNetwork} = require('../brain-model/brain-model')
const jsonToBrainData = require('../brain-model/translator-funcs')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const newMorningEntry = await MorningEntry.create(req.body)
    const translatedData = jsonToBrainData(newMorningEntry)
    const modelOutput = moodNetwork.run(translatedData)
    const updated = await newMorningEntry.update({
      prediction: JSON.stringify(modelOutput)
    })
    console.log('updated newMorningEntry: ', updated)
    res.send(updated)
  } catch (error) {
    next(error)
  }
})
