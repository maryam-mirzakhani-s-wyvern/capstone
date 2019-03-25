import React from 'react'
const {jsonToBrainData} = require('../../server/brain-model/translator-funcs')

const sampleEntry = {
  id: 3,
  date: '2019-03-24',
  sleep: '4-6',
  social: 'Less than usual',
  sun: 2,
  relax: 'Less than usual',
  exercise: false,
  work: 1,
  meals: 2,
  tags: null,
  journal: null,
  actualpleasant: 0.5,
  actualtension: 0.5,
  actualenergy: 0.5,
  createdAt: '2019-03-24T22:36:19.777Z',
  updatedAt: '2019-03-24T22:36:19.777Z'
}

const sampleData = jsonToBrainData(sampleEntry)

class InputChart extends React.Component {
  render() {
    console.log(sampleData)
    return <div>{sampleData.sleep}</div>
  }
}

export default InputChart
