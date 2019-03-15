const Sequelize = require('sequelize')
const db = require('../db')

const morningEntry = db.define('morningEntry', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = morningEntry
