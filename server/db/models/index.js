const User = require('./user')
const MoodTracker = require('./moodTracker')
const MorningEntry = require('./morningEntries')
const EveningEntry = require('./eveningEntries')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// User.hasOne(MoodTracker)
// MoodTracker.belongsTo(User)

// MoodTracker.hasMany(MorningEntry)
// MorningEntry.belongsTo(MoodTracker)

// MoodTracker.hasMany(EveningEntry)
// EveningEntry.belongsTo(MoodTracker)

User.hasMany(MorningEntry)
MorningEntry.belongsTo(User)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  MoodTracker,
  MorningEntry,
  EveningEntry
}
