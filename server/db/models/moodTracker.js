const Sequelize = require('sequelize')
const db = require('../db')

const moodTracker = db.define('moodTracker', {})

module.exports = moodTracker
