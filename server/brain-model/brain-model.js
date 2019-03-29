const brain = require('brain.js')
const fs = require('fs')
const axios = require('axios')
const loadTrainingData = require('./translator-funcs')

let moodNetwork

function loadnetfile(net, savednet) {
  const jNet = fs.readFileSync(savednet, 'utf-8')
  const parsed = JSON.parse(jNet)
  net.fromJSON(parsed)
}

function loadnetpersonal(net, netString) {
  const parsed = JSON.parse(netString)
  net.fromJSON(parsed)
}

function savenet(net, file) {
  let j = JSON.stringify(net.toJSON())
  try {
    fs.writeFileSync(file, j, 'utf-8')
  } catch (error) {
    console.error(error)
  }
}
let file = true
try {
  fs.accessSync('./network.json')
} catch (error) {
  file = false
}
if (file) {
  moodNetwork = new brain.NeuralNetwork()
  loadnetfile(moodNetwork, './network.json')
  console.log('loaded existing network')
} else {
  let data = loadTrainingData('training.json')
  const crossValidate = new brain.CrossValidate(brain.NeuralNetwork, {
    hiddenLayers: [7, 5, 4],
    activation: 'sigmoid'
  })
  crossValidate.train(data)
  moodNetwork = crossValidate.toNeuralNetwork()
  console.log('new network trained')
  savenet(moodNetwork, './network.json')
}

module.exports = {moodNetwork, savenet}
