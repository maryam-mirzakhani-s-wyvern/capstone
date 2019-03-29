'use strict'

const db = require('../server/db')
const {User, MorningEntry, EveningEntry} = require('../server/db/models')
const brainToDB = require('../server/brain-model/backwards-translate')
const {harleyEvenings, harleyMornings} = require('./harleydata')

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
      name: 'Murphy',
      isAdmin: true
    }),
    User.create({
      email: 'harley@bobtail.com',
      password: 'floof',
      name: 'Harley'
    })
  ])

  const morningEntries = await Promise.all([
    MorningEntry.create({
      date: '2019-03-21',
      sleep: '0-2',
      social: 'Usual amount',
      meals: 3,
      exercise: 'Yes',
      work: 5,
      relax: 'More than usual',
      sun: 5,
      pleasant: 0.5972896814346313,
      tension: 0.5301905870437622,
      energy: 0.622186005115509,
      userId: 1
    }),
    MorningEntry.create({
      date: '2019-03-22',
      sleep: '8+',
      social: 'Usual amount',
      meals: 2,
      exercise: 'Yes',
      work: 1,
      relax: 'More than usual',
      sun: 4,
      pleasant: 0.5663926601409912,
      tension: 0.3631877899169922,
      energy: 0.46262723207473755,
      userId: 1
    })
  ])

  const eveningEntries = [
    {
      sleep: '2-4',
      social: 'Usual amount',
      sun: 2,
      relax: 'Usual amount',
      exercise: false,
      work: 3,
      meals: 3,
      tags: null,
      actualpleasant: 0.69,
      actualtension: 0.6,
      actualenergy: 0.25,
      date: '2019-03-22',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'Usual amount',
      sun: 5,
      relax: 'Less than usual',
      exercise: false,
      work: 4,
      meals: 2,
      tags: ['cram time', 'grace hopper', 'videogames'],
      actualpleasant: 0.72,
      actualtension: 0.56,
      actualenergy: 0.66,
      date: '2019-03-23',
      userId: 1
    },
    {
      sleep: '0-2',
      social: 'Less than usual',
      sun: 3,
      relax: 'More than usual',
      exercise: false,
      work: 3,
      meals: 2,
      tags: null,
      actualpleasant: 0.65,
      actualtension: 0.35,
      actualenergy: 0.36,
      date: '2019-03-24',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'Less than usual',
      sun: 4,
      relax: 'Less than usual',
      exercise: true,
      work: 3,
      meals: 2,
      tags: null,
      actualpleasant: 0.77,
      actualtension: 0.64,
      actualenergy: 0.75,
      date: '2019-03-25',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'Usual amount',
      sun: 5,
      relax: 'Less than usual',
      exercise: true,
      work: 3,
      meals: 3,
      tags: ['Today was a great day!'],
      actualpleasant: 0.92,
      actualtension: 0.71,
      actualenergy: 0.58,
      date: '2019-03-21',
      userId: 1
    },
    {
      sleep: '2-4',
      social: 'More than usual',
      sun: 4,
      relax: 'Less than usual',
      exercise: false,
      work: 2,
      meals: 3,
      tags: ['n/a'],
      actualpleasant: 0.55,
      actualtension: 0.77,
      actualenergy: 0.53,
      date: '2019-03-01',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'Usual amount',
      sun: 4,
      relax: 'Less than usual',
      exercise: false,
      work: 4,
      meals: 3,
      tags: null,
      actualpleasant: 0.62,
      actualtension: 0.46,
      actualenergy: 0.28,
      date: '2019-03-02',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'Not at all',
      sun: 3,
      relax: 'More than usual',
      exercise: false,
      work: 3,
      meals: 3,
      tags: null,
      actualpleasant: 0.83,
      actualtension: 0.37,
      actualenergy: 0.38,
      date: '2019-03-04',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'Less than usual',
      sun: 4,
      relax: 'Less than usual',
      exercise: false,
      work: 3,
      meals: 3,
      tags: ['Javascript was not written for coding'],
      actualpleasant: 0.21,
      actualtension: 0.94,
      actualenergy: 0.21,
      date: '2019-03-20',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'Usual amount',
      sun: 4,
      relax: 'More than usual',
      exercise: false,
      work: 3,
      meals: 1,
      tags: null,
      actualpleasant: 0.82,
      actualtension: 0.79,
      actualenergy: 0.86,
      date: '2019-03-18',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'More than usual',
      sun: 1,
      relax: 'Usual amount',
      exercise: false,
      work: 3,
      meals: 0,
      tags: ['Capstone is stressful'],
      actualpleasant: 0.78,
      actualtension: 0.61,
      actualenergy: 0.13,
      date: '2019-03-15',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'Usual amount',
      sun: 5,
      relax: 'Usual amount',
      exercise: false,
      work: 5,
      meals: 3,
      tags: [
        'I had a fairly calm day. Not many unexpected things happened',
        ' I had a bunch of meetings which was annoying but it turned it into a generally easy day.'
      ],
      actualpleasant: 0.85,
      actualtension: 0.19,
      actualenergy: 0.4,
      date: '2019-03-16',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'Less than usual',
      sun: 3,
      relax: 'Usual amount',
      exercise: false,
      work: 4,
      meals: 1,
      tags: null,
      actualpleasant: 0.75,
      actualtension: 0.74,
      actualenergy: 0.92,
      date: '2019-03-17',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'Usual amount',
      sun: 2,
      relax: 'Less than usual',
      exercise: false,
      work: 4,
      meals: 3,
      tags: null,
      actualpleasant: 0.72,
      actualtension: 0.74,
      actualenergy: 0.62,
      date: '2019-03-10',
      userId: 1
    },
    {
      sleep: '4-6',
      social: 'Less than usual',
      sun: 4,
      relax: 'Less than usual',
      exercise: false,
      work: 3,
      meals: 2,
      tags: ['being an adult is stressful'],
      actualpleasant: 0.66,
      actualtension: 0.85,
      actualenergy: 0.7,
      date: '2019-03-19',
      userId: 1
    },
    {
      sleep: '6-8',
      social: 'More than usual',
      sun: 4,
      relax: 'Not at all',
      exercise: false,
      work: 4,
      meals: 3,
      tags: [
        'Stressful / manic but generally enjoyable day - could have done with some exercise and relaxation. '
      ],
      actualpleasant: 0.58,
      actualtension: 0.94,
      actualenergy: 0.83,
      date: '2019-03-15'
    },
    {
      sleep: '6-8',
      social: 'Not at all',
      sun: 3,
      relax: 'More than usual',
      exercise: false,
      work: 0,
      meals: 2,
      tags: ['Nice job', ' cool app idea!'],
      actualpleasant: 0.75,
      actualtension: 0.83,
      actualenergy: 0.63,
      date: '2019-03-22'
    },
    {
      sleep: '4-6',
      social: 'More than usual',
      sun: 4,
      relax: 'Less than usual',
      exercise: false,
      work: 3,
      meals: 2,
      tags: null,
      actualpleasant: 0.68,
      actualtension: 0.55,
      actualenergy: 0.6,
      date: '2019-03-22'
    },
    {
      sleep: '6-8',
      social: 'Usual amount',
      sun: 3,
      relax: 'Less than usual',
      exercise: true,
      work: 5,
      meals: 4,
      tags: [
        'Today',
        " I felt calm because I didn't have any major deadlines",
        ' it was sunny',
        ' and I got enough sleep'
      ],
      actualpleasant: 0.6,
      actualtension: 0.43,
      actualenergy: 0.69,
      date: '2019-03-22'
    },
    {
      sleep: '6-8',
      social: 'More than usual',
      sun: 2,
      relax: 'Usual amount',
      exercise: true,
      work: 5,
      meals: 3,
      tags: ['Not really'],
      actualpleasant: 1,
      actualtension: 0.57,
      actualenergy: 0.69,
      date: '2019-03-22'
    },
    {
      sleep: '6-8',
      social: 'Usual amount',
      sun: 3,
      relax: 'Usual amount',
      exercise: false,
      work: 4,
      meals: 2,
      tags: ['Starting to think about some deadlines!'],
      actualpleasant: 0.75,
      actualtension: 0.19,
      actualenergy: 0.49,
      date: '2019-03-22'
    },
    {
      sleep: '6-8',
      social: 'Usual amount',
      sun: 0,
      relax: 'Usual amount',
      exercise: false,
      work: 3,
      meals: 3,
      tags: [
        "this morning: capstone = we're dying. EOD: capstone = we might be able to save it. Why is the window object not available to us in travis thooo?"
      ],
      actualpleasant: 0.61,
      actualtension: 0.97,
      actualenergy: 1,
      date: '2019-03-22'
    },
    {
      sleep: '6-8',
      social: 'Less than usual',
      sun: 0,
      relax: 'Usual amount',
      exercise: true,
      work: 4,
      meals: 2,
      tags: null,
      actualpleasant: 0.91,
      actualtension: 0.66,
      actualenergy: 0.85,
      date: '2019-03-22'
    },
    {
      sleep: '4-6',
      social: 'Usual amount',
      sun: 5,
      relax: 'Less than usual',
      exercise: true,
      work: 5,
      meals: 1,
      tags: [
        'As a new instructor hire',
        " it's definitely a little overwhelming to get acclimated to everything but I am excited for the challenges and being able to help the students. "
      ],
      actualpleasant: 0.88,
      actualtension: 0.88,
      actualenergy: 0.92,
      date: '2019-03-22'
    },
    {
      sleep: '6-8',
      social: 'Usual amount',
      sun: 3,
      relax: 'Less than usual',
      exercise: false,
      work: 3,
      meals: 3,
      tags: [
        'I still have more work to finish. New housemates will arrive today and there will be higher demand for the single bathroom.'
      ],
      actualpleasant: 0.71,
      actualtension: 0.65,
      actualenergy: 0.63,
      date: '2019-03-22'
    }
  ]

  const eveningData = await EveningEntry.bulkCreate(eveningEntries)
  const heveningData = await EveningEntry.bulkCreate(harleyEvenings)
  const hmorningData = await MorningEntry.bulkCreate(harleyMornings)

  console.log(`seeded ${users.length} users`)
  // console.log(`seeded ${moodTrackers.length} moodtrackers`)
  console.log(`seeded ${morningEntries.length} morning entries`)
  console.log(`seeded ${eveningData.length} evening entries`)
  console.log(`seeded ${heveningData.length} morning entries`)
  console.log(`seeded ${hmorningData.length} evening entries`)
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
