'use strict'

const db = require('../server/db')
const {User, MorningEntry, EveningEntry} = require('../server/db/models')
const brainToDB = require('../server/brain-model/backwards-translate')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '54321',
      name: 'Cody'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '12345',
      name: 'Murphy'
    })
  ])

  // const moodTrackers = await Promise.all([
  //   MoodTracker.create({
  //     userId: 1
  //   }),
  //   MoodTracker.create({
  //     userId: 2
  //   })
  // ])

  const morningEntries = await Promise.all([
    MorningEntry.create({
      filledOut: true,
      sleep: '0-2',
      social: 'Usual amount',
      meals: 3,
      exercise: 'Yes',
      work: 5,
      relax: 'More than usual',
      sun: 5,
      userId: 1
    }),
    MorningEntry.create({
      filledOut: true,
      sleep: '8+',
      social: 'Usual amount',
      meals: 2,
      exercise: 'Yes',
      work: 1,
      relax: 'More than usual',
      sun: 4,
      userId: 2
    })
  ])

  const brainData = [
    {
      sleep: 0.5,
      sun: 0.75,
      exercise: 1,
      social: 0.66,
      relax: 1,
      meals: 0.75,
      work: 0.4,
      pleasant: 0.7,
      tension: 0.5,
      energy: 0.7
    },
    {
      sleep: 0.25,
      sun: 0.5,
      exercise: 0,
      social: 1,
      relax: 0.33,
      meals: 0.5,
      work: 1,
      pleasant: 0.6,
      tension: 0.6,
      energy: 0.5
    },
    {
      sleep: 0.75,
      sun: 0.75,
      exercise: 0,
      social: 0.66,
      relax: 0.66,
      meals: 0.75,
      work: 0.8,
      pleasant: 0.8,
      tension: 0.4,
      energy: 0.7
    },
    {
      sleep: 0.75,
      sun: 1,
      exercise: 1,
      social: 0.33,
      relax: 0.66,
      meals: 0.25,
      work: 0.6,
      pleasant: 0.8,
      tension: 0.3,
      energy: 0.4
    },

    {
      sleep: 1,
      sun: 0.25,
      exercise: 1,
      social: 0,
      relax: 0.33,
      meals: 0.75,
      work: 0.2,
      pleasant: 0.5,
      tension: 0.7,
      energy: 0.6
    },
    {
      sleep: 1,
      sun: 0.75,
      exercise: 0,
      social: 0.33,
      relax: 0.66,
      meals: 0.5,
      work: 0.2,
      pleasant: 0.5,
      tension: 0.5,
      energy: 0.7
    },
    {
      sleep: 0.5,
      sun: 0.25,
      exercise: 1,
      social: 0.66,
      relax: 0,
      meals: 0.25,
      work: 0.4,
      pleasant: 0.2,
      tension: 0.8,
      energy: 0.3
    },
    {
      sleep: 0.25,
      sun: 0.5,
      exercise: 0,
      social: 0.33,
      relax: 1,
      meals: 0.75,
      work: 0.6,
      pleasant: 0.4,
      tension: 0.6,
      energy: 0.2
    },

    {
      sleep: 0.25,
      sun: 0.25,
      exercise: 1,
      social: 1,
      relax: 0,
      meals: 0.5,
      work: 0.6,
      pleasant: 0.6,
      tension: 0.4,
      energy: 0.4
    },
    {
      sleep: 0.75,
      sun: 0,
      exercise: 0,
      social: 0.66,
      relax: 0.33,
      meals: 0.25,
      work: 0.8,
      pleasant: 0.3,
      tension: 0.7,
      energy: 0.4
    },
    {
      sleep: 1,
      sun: 0.75,
      exercise: 0,
      social: 0.33,
      relax: 0.33,
      meals: 0.5,
      work: 0.2,
      pleasant: 0.6,
      tension: 0.9,
      energy: 0.7
    },
    {
      sleep: 0.5,
      sun: 0.5,
      exercise: 0,
      social: 0.33,
      relax: 0,
      meals: 0.5,
      work: 0.4,
      pleasant: 0.1,
      tension: 0.9,
      energy: 0.4
    },

    {
      sleep: 0.25,
      sun: 1,
      exercise: 1,
      social: 1,
      relax: 0,
      meals: 0.5,
      work: 1,
      pleasant: 0.8,
      tension: 0.3,
      energy: 0.5
    },
    {
      sleep: 0.75,
      sun: 1,
      exercise: 1,
      social: 0.66,
      relax: 0.66,
      meals: 0.5,
      work: 0.6,
      pleasant: 0.5,
      tension: 0.4,
      energy: 0.8
    },
    {
      sleep: 1,
      sun: 0.75,
      exercise: 1,
      social: 0.33,
      relax: 0.66,
      meals: 0.75,
      work: 0.8,
      pleasant: 0.8,
      tension: 0.2,
      energy: 1
    },
    {
      sleep: 0.75,
      sun: 0.75,
      exercise: 0,
      social: 1,
      relax: 1,
      meals: 0.75,
      work: 0.6,
      pleasant: 0.8,
      energy: 0.7,
      tension: 0.4
    },

    {
      sleep: 0.5,
      sun: 0.5,
      exercise: 1,
      social: 0.33,
      relax: 1,
      meals: 0.5,
      work: 0.6,
      pleasant: 0.5,
      tension: 0.3,
      energy: 0.7
    },
    {
      sleep: 1,
      sun: 0.75,
      exercise: 1,
      social: 0.66,
      relax: 0.33,
      meals: 0.75,
      work: 0.4,
      pleasant: 0.6,
      tension: 0.5,
      energy: 0.5
    },
    {
      sleep: 0.25,
      sun: 1,
      exercise: 0,
      social: 0,
      relax: 0.66,
      meals: 0.75,
      work: 0.6,
      pleasant: 0.7,
      tension: 0.6,
      energy: 0.4
    },
    {
      sleep: 0.75,
      sun: 0,
      exercise: 1,
      social: 0.66,
      relax: 1,
      meals: 0.5,
      work: 0.8,
      pleasant: 0.5,
      tension: 0.1,
      energy: 0.3
    },

    {
      sleep: 0.75,
      sun: 0.75,
      exercise: 1,
      social: 1,
      relax: 1,
      meals: 0.75,
      work: 1,
      pleasant: 1,
      tension: 0,
      energy: 0.5
    },
    {
      sleep: 0,
      sun: 0,
      exercise: 0,
      social: 0,
      relax: 0,
      meals: 0.25,
      work: 0,
      pleasant: 0,
      tension: 1,
      energy: 0
    },
    {
      sleep: 0.5,
      sun: 0.5,
      exercise: 0,
      social: 1,
      relax: 0.33,
      meals: 0.25,
      work: 0.2,
      pleasant: 0,
      tension: 0.3,
      energy: 0.5
    },
    {
      sleep: 0.75,
      sun: 1,
      exercise: 0,
      social: 1,
      relax: 0,
      meals: 0.75,
      work: 0.4,
      pleasant: 1,
      tension: 1,
      energy: 1
    }
  ]

  const translatedData = brainData.map(inputObj => {
    return brainToDB(inputObj)
  })
  console.log('TRANSLATED::', translatedData)

  const eveningData = await EveningEntry.bulkCreate(translatedData)

  console.log(`seeded ${users.length} users`)
  // console.log(`seeded ${moodTrackers.length} moodtrackers`)
  console.log(`seeded ${morningEntries.length} morning entries`)
  console.log(`seeded ${eveningData.length} evening entries`)
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
