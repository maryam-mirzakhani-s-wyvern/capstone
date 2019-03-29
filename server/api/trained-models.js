const router = require('express').Router()
const {EveningEntry} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const personalModel = await EveningEntry.find({
      where: {userId: req.session.passport.user}
    })
    res.json(personalModel)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const newEveningEntry = await EveningEntry.update(
      {where: {userId: req.session.passport.user}},
      req.body
    )
    res.send(newEveningEntry)
  } catch (error) {
    next(error)
  }
})
