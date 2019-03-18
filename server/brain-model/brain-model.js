const brain = require('brain.js')
const moodNetwork = new brain.NeuralNetwork({
  hiddenLayers: [6, 4],
  activation: 'sigmoid'
})
const fs = require('fs')

/*input to adjust: 
    sleep: brackets:
        0-2     0
        3-5     .33
        6-8     .66
        9+      1
output: pleasantness, tension, energy (0-1 in .1 increments)
*/

// const binaryData = [
//     {input: { sleep: 1, sun: 1, exercise: 1, social: 1, relax: 1, meals: 1, work: 1}, output: { pleasant: 1, energy: 1}},
//     { input: { sleep: 0, sun: 0, exercise: 0, social: 1, relax: 1, meals: 1, work: 1}, output: {pleasant: 1, energy: 0}},
//     { input: { sleep: 0, sun: 0, exercise: 0, social: 0, relax: 0, meals: 0, work: 0}, output: {pleasant: 0, energy: 0}},
//     { input: { sleep: 1, sun: 1, exercise: 1, social: 0, relax: 0, meals: 0, work: 0}, output: { pleasant: 0, energy: 1}}

// ]

const originalData = [
  {
    input: {
      sleep: 0.66,
      sun: 0.75,
      exercise: 1,
      social: 0.66,
      relax: 1,
      meals: 0.75,
      work: 0.4
    },
    output: {pleasant: 0.7, tension: 0.5, energy: 0.7}
  },
  {
    input: {
      sleep: 0.33,
      sun: 0.5,
      exercise: 0,
      social: 1,
      relax: 0.33,
      meals: 0.5,
      work: 1
    },
    output: {pleasant: 0.6, tension: 0.6, energy: 0.5}
  },
  {
    input: {
      sleep: 0.66,
      sun: 0.75,
      exercise: 0,
      social: 0.66,
      relax: 0.66,
      meals: 0.75,
      work: 0.8
    },
    output: {pleasant: 0.8, tension: 0.4, energy: 0.7}
  },
  {
    input: {
      sleep: 0.66,
      sun: 1,
      exercise: 1,
      social: 0.33,
      relax: 0.66,
      meals: 0.25,
      work: 0.6
    },
    output: {pleasant: 0.8, tension: 0.3, energy: 0.4}
  },

  {
    input: {
      sleep: 1,
      sun: 0.25,
      exercise: 1,
      social: 0,
      relax: 0.33,
      meals: 0.75,
      work: 0.2
    },
    output: {pleasant: 0.5, tension: 0.7, energy: 0.6}
  },
  {
    input: {
      sleep: 1,
      sun: 0.75,
      exercise: 0,
      social: 0.33,
      relax: 0.66,
      meals: 0.5,
      work: 0.2
    },
    output: {pleasant: 0.5, tension: 0.5, energy: 0.7}
  },
  {
    input: {
      sleep: 0.66,
      sun: 0.25,
      exercise: 1,
      social: 0.66,
      relax: 0,
      meals: 0.25,
      work: 0.4
    },
    output: {pleasant: 0.2, tension: 0.8, energy: 0.3}
  },
  {
    input: {
      sleep: 0.33,
      sun: 0.5,
      exercise: 0,
      social: 0.33,
      relax: 1,
      meals: 0.75,
      work: 0.6
    },
    output: {pleasant: 0.4, tension: 0.6, energy: 0.2}
  },

  {
    input: {
      sleep: 0.33,
      sun: 0.25,
      exercise: 1,
      social: 1,
      relax: 0,
      meals: 0.5,
      work: 0.6
    },
    output: {pleasant: 0.6, tension: 0.4, energy: 0.4}
  },
  {
    input: {
      sleep: 0.66,
      sun: 0,
      exercise: 0,
      social: 0.66,
      relax: 0.33,
      meals: 0.25,
      work: 0.8
    },
    output: {pleasant: 0.3, tension: 0.7, energy: 0.4}
  },
  {
    input: {
      sleep: 1,
      sun: 0.75,
      exercise: 0,
      social: 0.33,
      relax: 0.33,
      meals: 0.5,
      work: 0.2
    },
    output: {pleasant: 0.6, tension: 0.9, energy: 0.7}
  },
  {
    input: {
      sleep: 0.66,
      sun: 0.5,
      exercise: 0,
      social: 0.33,
      relax: 0,
      meals: 0.5,
      work: 0.4
    },
    output: {pleasant: 0.1, tension: 0.9, energy: 0.4}
  },

  {
    input: {
      sleep: 0.33,
      sun: 1,
      exercise: 1,
      social: 1,
      relax: 0,
      meals: 0.5,
      work: 1
    },
    output: {pleasant: 0.8, tension: 0.3, energy: 0.5}
  },
  {
    input: {
      sleep: 0.66,
      sun: 1,
      exercise: 1,
      social: 0.66,
      relax: 0.66,
      meals: 0.5,
      work: 0.6
    },
    output: {pleasant: 0.5, tension: 0.4, energy: 0.8}
  },
  {
    input: {
      sleep: 1,
      sun: 0.75,
      exercise: 1,
      social: 0.33,
      relax: 0.66,
      meals: 0.75,
      work: 0.8
    },
    output: {pleasant: 0.8, tension: 0.2, energy: 1}
  },
  {
    input: {
      sleep: 0.66,
      sun: 0.75,
      exercise: 0,
      social: 1,
      relax: 1,
      meals: 0.75,
      work: 0.6
    },
    output: {pleasant: 0.8, energy: 0.7, tension: 0.4}
  },

  {
    input: {
      sleep: 0.66,
      sun: 0.5,
      exercise: 1,
      social: 0.33,
      relax: 1,
      meals: 0.5,
      work: 0.6
    },
    output: {pleasant: 0.5, tension: 0.3, energy: 0.7}
  },
  {
    input: {
      sleep: 1,
      sun: 0.75,
      exercise: 1,
      social: 0.66,
      relax: 0.33,
      meals: 0.75,
      work: 0.4
    },
    output: {pleasant: 0.6, tension: 0.5, energy: 0.5}
  },
  {
    input: {
      sleep: 0.33,
      sun: 1,
      exercise: 0,
      social: 0,
      relax: 0.66,
      meals: 0.75,
      work: 0.6
    },
    output: {pleasant: 0.7, tension: 0.6, energy: 0.4}
  },
  {
    input: {
      sleep: 0.66,
      sun: 0,
      exercise: 1,
      social: 0.66,
      relax: 1,
      meals: 0.5,
      work: 0.8
    },
    output: {pleasant: 0.5, tension: 0.1, energy: 0.3}
  },

  {
    input: {
      sleep: 0.66,
      sun: 0.75,
      exercise: 1,
      social: 1,
      relax: 1,
      meals: 0.75,
      work: 1
    },
    output: {pleasant: 1, tension: 0, energy: 0.5}
  },
  {
    input: {
      sleep: 0,
      sun: 0,
      exercise: 0,
      social: 0,
      relax: 0,
      meals: 0.25,
      work: 0
    },
    output: {pleasant: 0, tension: 1, energy: 0}
  },
  {
    input: {
      sleep: 0.66,
      sun: 0.5,
      exercise: 0,
      social: 1,
      relax: 0.33,
      meals: 0.25,
      work: 0.2
    },
    output: {pleasant: 0, tension: 0.3, energy: 0.5}
  },
  {
    input: {
      sleep: 0.66,
      sun: 1,
      exercise: 0,
      social: 1,
      relax: 0,
      meals: 0.75,
      work: 0.4
    },
    output: {pleasant: 1, tension: 1, energy: 1}
  }
]
// function getRF(min, max) {  //random float
//     return Math.random() * (max - min) + min;
// }

// function highEnergyData(){
//     const result = []
//     while (result.length < 5000){
//         let newData = {input: {}, output: {}}
//         newData.input.sleep = getRF(0.6, 1)
//         newData.input.sun = getRF(0.6, 1)
//         newData.input.exercise = getRF(0.6, 1)
//         newData.input.social = getRF(0, 1)
//         newData.input.relax = getRF(0, 1)
//         newData.input.meals = getRF(0, 1)
//         newData.input.work = getRF(0, 1)

//         newData.output.energy = 1
//         //getRF((newData.input.sleep + newData.input.sun + newData.input.exercise) / 3, 1)
//         newData.output.pleasant = getRF(0, 1)
//         //getRF((newData.input.relax + newData.input.meals + newData.input.work) / 3, 1)
//         //newData.output.tension //take out?
//         result.push(newData)
//     }
//     return result
// }

// function highPleasantData(){
//     const result = []
//     while (result.length < 5000){
//         let newData = {input: {}, output: {}}
//         newData.input.sleep = getRF(0, 1)
//         newData.input.sun = getRF(0, 1)
//         newData.input.exercise = getRF(0, 1)
//         newData.input.social = getRF(0, 1)
//         newData.input.relax = getRF(0.6, 1)
//         newData.input.meals = getRF(0.6, 1)
//         newData.input.work = getRF(0.6, 1)

//         newData.output.energy = getRF(0, 1)
//         //getRF((newData.input.sleep + newData.input.sun + newData.input.exercise) / 3, 1)
//         newData.output.pleasant = 1
//         //getRF((newData.input.relax + newData.input.meals + newData.input.work) / 3, 1)
//         //newData.output.tension //take out?
//         result.push(newData)
//     }
//     return result
// }

// const pData = highPleasantData()
// const eData = highEnergyData()

// const comboData = pData.concat(eData)

const stats = moodNetwork.train(originalData)

console.log('Stats: ', stats)
fs.writeFileSync('NN.txt', JSON.stringify(moodNetwork.toJSON()))

const guessMore = [
  {
    sleep: 0,
    sun: 0.75,
    exercise: 0,
    social: 1,
    relax: 1,
    meals: 0.5,
    work: 0.4
  }, //pleasant: 0-.4, tension: .4-.7, energy: 0-.4
  {
    sleep: 0.66,
    sun: 0.75,
    exercise: 1,
    social: 0.66,
    relax: 1,
    meals: 0.75,
    work: 1
  }, //pleasant: .4-.7, tension: .2-.4, energy: .5-.9
  {
    sleep: 1,
    sun: 0.25,
    exercise: 1,
    social: 0,
    relax: 0.33,
    meals: 0.75,
    work: 0
  }, //pleasant: .3-.5, tension: .4-.7, energy: .5-1
  {
    sleep: 1,
    sun: 0.75,
    exercise: 1,
    social: 0.66,
    relax: 0.33,
    meals: 0.75,
    work: 0.6
  }, // pleasant: .6-1, tension: .2-.5, energy: .5-.8
  {
    sleep: 0.66,
    sun: 1,
    exercise: 1,
    social: 1,
    relax: 0.66,
    meals: 0.5,
    work: 0.6
  }, //pleasant: .5-.9, tension: .3-.6, energy: .6-.9
  {
    sleep: 0.33,
    sun: 0.25,
    exercise: 1,
    social: 1,
    relax: 0,
    meals: 0.5,
    work: 0.4
  } //pleasant: .3-.6, tension: .6-.8, energy: .3-.5
]

function avgOfRuns(input, network, times) {
  let results = []
  for (let i = 0; i < times; i++) {
    results.push(network.run(input))
  }
  let o1 = 0
  let o2 = 0
  let o3 = 0
  for (let j = 0; j < times; j++) {
    o1 += results[j].pleasant
    o2 += results[j].tension
    o3 += results[j].energy
  }
  return {pleasant: o1 / times, tension: o2 / times, energy: o3 / times}
}

function orderResults(resultObj) {
  let order = []
  for (let key in resultObj) {
    if (Object.prototype.hasOwnProperty.call(resultObj, key)) {
      order.push([key, resultObj[key]])
    }
  }
  order.sort(function(a, b) {
    var valueA, valueB

    valueA = a[1]
    valueB = b[1]
    if (valueA < valueB) {
      return -1
    } else if (valueA > valueB) {
      return 1
    }
    return 0
  })
  return order
}

// const r1 = avgOfRuns(guessMore[0], moodNetwork, 100)
// const r2 = avgOfRuns(guessMore[1], moodNetwork, 100)
// const r3 = avgOfRuns(guessMore[2], moodNetwork, 100)
// const r4 = avgOfRuns(guessMore[3], moodNetwork, 100)
// const r5 = avgOfRuns(guessMore[4], moodNetwork, 100)
// const r6 = avgOfRuns(guessMore[5], moodNetwork, 100)

// console.log('Result1: \n', r1)
// console.log('order: ', orderResults(r1))
// console.log('Result2: \n', r2)
// console.log('order: ', orderResults(r2))
// console.log('Result3: \n', r3)
// console.log('order: ', orderResults(r3))
// console.log('Result4: \n', r4)
// console.log('order: ', orderResults(r4))
// console.log('Result5: \n', r5)
// console.log('order: ', orderResults(r5))
// console.log('Result6: \n', r6)
// console.log('order: ', orderResults(r6))

//console.log(moodNetwork.toJSON())
module.exports = {moodNetwork, avgOfRuns}
