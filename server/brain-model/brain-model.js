const brain = require('brain.js')
//const path = require('path');
const fs = require('fs')

let moodNetwork

function loadnetfile(net, savednet) {
  const jNet = fs.readFileSync(savednet, 'utf-8')
  const parsed = JSON.parse(jNet)
  net.fromJSON(parsed)
}

function savenet(net, file) {
  let j = JSON.stringify(net.toJSON())
  fs.writeFileSync(file, j)
}

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

if (fs.accessSync('./network.json')) {
  moodNetwork = new brain.NeuralNetwork()
  loadnetfile(moodNetwork, './network.json')
  console.log('loaded existing network: ', moodNetwork)
} else {
  moodNetwork = new brain.NeuralNetwork({
    hiddenLayers: [6, 4],
    activation: 'sigmoid'
  })
  const stats = moodNetwork.train(originalData)
  console.log('new network trained with the following stats: ', stats)
  savenet(moodNetwork, './network.json')
}

module.exports = {moodNetwork, savenet}
