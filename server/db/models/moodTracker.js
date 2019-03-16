const Sequelize = require('sequelize')
const db = require('../db')

const moodTracker = db.define('mood-tracker', {})

module.exports = moodTracker
