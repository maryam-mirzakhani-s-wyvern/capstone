'use strict'

const db = require('../server/db')
const {
  User,
  MoodTracker,
  MorningEntry,
  EveningEntry
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '54321',
      firstName: 'Cody',
      lastName: 'Pup',
      DOB: new Date()
    }),
    User.create({
      email: 'murphy@email.com',
      password: '12345',
      firstName: 'Murphy',
      lastName: 'Slaw',
      DOB: Date('01/01/2001')
    })
  ])

  const moodTrackers = await Promise.all([
    MoodTracker.create({
      userId: 1
    }),
    MoodTracker.create({
      userId: 2
    })
  ])

  const morningEntries = await Promise.all([
    MorningEntry.create({
      sleep: '0-2',
      social: 'Usual amount',
      meals: 3,
      exercise: 'Yes',
      work: 5,
      relax: 'More than usual',
      sun: 5,
      moodTrackerId: 1
    }),
    MorningEntry.create({
      sleep: '8+',
      social: 'Usual amount',
      meals: 2,
      exercise: 'Yes',
      work: 1,
      relax: 'More than usual',
      sun: 4,
      moodTrackerId: 1
    })
  ])

  const eveningEntries = await Promise.all([
    EveningEntry.create({
      sleep: '0-2',
      social: 'Not at all',
      meals: 3,
      exercise: 'Yes',
      work: 5,
      relax: 'More than usual',
      sun: 5,
      tags: ['meeting', 'yoga'],
      moodTrackerId: 1
    }),
    EveningEntry.create({
      sleep: '8+',
      social: 'Usual amount',
      meals: 2,
      exercise: 'Yes',
      work: 1,
      relax: 'More than usual',
      sun: 4,
      tags: ['brunch', 'chat with Dad'],
      moodTrackerId: 1
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${moodTrackers.length} moodtrackers`)
  console.log(`seeded ${morningEntries.length} morning entries`)
  console.log(`seeded ${eveningEntries.length} evening entries`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
