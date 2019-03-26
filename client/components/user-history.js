import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllEntries} from '../store'
import {SingleDay, HistoryChart, HistorySummary} from './'
const {jsonToBrainData} = require('../../server/brain-model/translator-funcs')

class UserHistory extends Component {
  constructor() {
    super()
    this.numerizeData = this.numerizeData.bind(this)
    this.bucketData = this.bucketData.bind(this)
  }

  componentDidMount() {
    this.props.getEntries()
  }

  numerizeData(data) {
    return data.map(entry => {
      const numEntry = jsonToBrainData(entry)
      numEntry.date = entry.date
      return numEntry
    })
  }

  bucketData(data) {
    const buckets = {
      social: [],
      sleep: [],
      meals: [],
      exercise: [],
      work: [],
      relax: [],
      sun: [],
      date: []
    }
    data.forEach(obj => {
      for (let key in buckets) {
        buckets[key].push(obj[key])
      }
    })
    return buckets
  }

  render() {
    const {allEntries} = this.props
    const numerized = this.numerizeData(allEntries)
    const formatted = this.bucketData(numerized)
    return (
      <div className="row">
        <HistoryChart formattedEntries={formatted} />
        <HistorySummary formattedEntries={formatted} />
        {/* <ul>
          {allEntries.map(entry => <SingleDay key={entry.id} entry={entry} />)}
        </ul> */}
      </div>
    )
  }
}

const mapState = state => ({
  allEntries: state.eveningEntry.allEntries
})

const mapDispatch = dispatch => ({
  getEntries: () => dispatch(getAllEntries())
})

export default connect(mapState, mapDispatch)(UserHistory)
