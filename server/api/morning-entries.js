const router = require('express').Router()
const {MorningEntry} = require('../db/models')
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
    const newMorningEntry = await MorningEntry.create(req.body)

    res.send(newMorningEntry)
  } catch (error) {
    next(error)
  }
})
