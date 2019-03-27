import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllEntries, toggleCategory} from '../store'
import {SingleDay, HistoryChart, HistorySummary} from './'
const {jsonToBrainData} = require('../../server/brain-model/translator-funcs')

class UserHistory extends Component {
  constructor() {
    super()
    this.numerizeData = this.numerizeData.bind(this)
    this.bucketData = this.bucketData.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
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

  handleSwitch(category) {
    this.props.toggleCat(category)
    this.forceUpdate()
  }

  render() {
    const {allEntries, conditions} = this.props
    const numerized = this.numerizeData(allEntries)
    const formatted = this.bucketData(numerized)
    const categories = Object.keys(formatted)
    return (
      <div>
        <h2>Your History:</h2>
        <div className="row">
          <HistoryChart
            formattedEntries={formatted}
            conditions={conditions}
            categories={categories}
          />
          <HistorySummary
            formattedEntries={formatted}
            handleSwitch={this.handleSwitch}
            conditions={conditions}
            categories={categories}
          />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  allEntries: state.eveningEntry.allEntries,
  conditions: state.history.displayChart
})

const mapDispatch = dispatch => ({
  getEntries: () => dispatch(getAllEntries()),
  toggleCat: category => dispatch(toggleCategory(category))
})

export default connect(mapState, mapDispatch)(UserHistory)
