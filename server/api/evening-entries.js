const router = require('express').Router()
const {EveningEntry} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const eveningEntries = await EveningEntry.findAll()
    res.json(eveningEntries)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newEveningEntry = await EveningEntry.create(req.body)
    res.send(newEveningEntry)
  } catch (error) {
    next(error)
  }
})
