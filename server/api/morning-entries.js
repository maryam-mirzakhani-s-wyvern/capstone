const router = require('express').Router()
const {MorningEntry} = require('../db/models')
module.exports = router

router.put('/', async (req, res, next) => {
  try {
    const newMorningEntry = MorningEntry.create(req.body)
    res.send(newMorningEntry)
  } catch (error) {
    next(error)
  }
})
